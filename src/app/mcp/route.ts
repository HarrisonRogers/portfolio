import { careers } from '@/app/career/careers';
import { projects } from '@/app/projects/projects';
import { profile } from '@/lib/portfolio';

const CURRENT_PROTOCOL_VERSION = '2026-07-28';
const LEGACY_PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26'];

type JsonRpcId = string | number | null;

type JsonRpcRequest = {
  jsonrpc: '2.0';
  id?: JsonRpcId;
  method: string;
  params?: {
    name?: string;
    arguments?: Record<string, unknown>;
    [key: string]: unknown;
  };
};

const tools = [
  {
    name: 'get_profile',
    title: 'Get Harrison Rogers profile',
    description:
      "Return Harrison Rogers' public professional profile, current Frontend/Growth Developer role at First Table, skills, about text, and contact links.",
    inputSchema: { type: 'object', additionalProperties: false },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  {
    name: 'list_projects',
    title: 'List Harrison Rogers projects',
    description:
      'Return Harrison Rogers\' public personal and professional software projects.',
    inputSchema: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['all', 'personal', 'work'],
          description: 'Optionally limit the result to personal or work projects.',
        },
      },
      additionalProperties: false,
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  {
    name: 'list_career',
    title: 'List Harrison Rogers career history',
    description: 'Return Harrison Rogers\' public employment history.',
    inputSchema: { type: 'object', additionalProperties: false },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
];

const mcpHeaders = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Content-Type-Options': 'nosniff',
};

function rpcResult(id: JsonRpcId, result: unknown, status = 200) {
  return Response.json(
    { jsonrpc: '2.0', id, result },
    { status, headers: mcpHeaders },
  );
}

function rpcError(
  id: JsonRpcId,
  code: number,
  message: string,
  status = 400,
) {
  return Response.json(
    { jsonrpc: '2.0', id, error: { code, message } },
    { status, headers: mcpHeaders },
  );
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function textToolResult(data: unknown) {
  return {
    resultType: 'complete',
    content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
    structuredContent: { data },
    isError: false,
  };
}

function callTool(request: JsonRpcRequest) {
  const name = request.params?.name;
  const args = request.params?.arguments ?? {};

  if (name === 'get_profile') return textToolResult(profile);
  if (name === 'list_career') return textToolResult(careers);

  if (name === 'list_projects') {
    const type = args.type ?? 'all';
    if (type !== 'all' && type !== 'personal' && type !== 'work') {
      return {
        resultType: 'complete',
        content: [
          {
            type: 'text',
            text: 'The type argument must be all, personal, or work.',
          },
        ],
        isError: true,
      };
    }

    const data =
      type === 'all'
        ? projects
        : projects.filter(
            (project) => project.personal === (type === 'personal'),
          );
    return textToolResult(data);
  }

  return null;
}

export function GET() {
  return Response.json(
    {
      jsonrpc: '2.0',
      id: null,
      error: { code: -32600, message: 'Use HTTP POST for MCP requests.' },
    },
    { status: 405, headers: { ...mcpHeaders, Allow: 'POST, OPTIONS' } },
  );
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return rpcError(null, -32000, 'Invalid Origin header.', 403);
  }

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return rpcError(null, -32600, 'Content-Type must be application/json.', 415);
  }

  let body: JsonRpcRequest;
  try {
    body = (await request.json()) as JsonRpcRequest;
  } catch {
    return rpcError(null, -32700, 'Parse error.');
  }

  if (
    body?.jsonrpc !== '2.0' ||
    typeof body.method !== 'string' ||
    (body.id !== undefined &&
      body.id !== null &&
      typeof body.id !== 'string' &&
      typeof body.id !== 'number')
  ) {
    return rpcError(body?.id ?? null, -32600, 'Invalid JSON-RPC request.');
  }

  const methodHeader = request.headers.get('mcp-method');
  const nameHeader = request.headers.get('mcp-name');
  const protocolHeader = request.headers.get('mcp-protocol-version');
  if (protocolHeader === CURRENT_PROTOCOL_VERSION && !methodHeader) {
    return rpcError(body.id ?? null, -32000, 'Mcp-Method header is required.');
  }
  if (
    protocolHeader === CURRENT_PROTOCOL_VERSION &&
    body.method === 'tools/call' &&
    !nameHeader
  ) {
    return rpcError(body.id ?? null, -32000, 'Mcp-Name header is required.');
  }
  if (methodHeader && methodHeader !== body.method) {
    return rpcError(body.id ?? null, -32001, 'Mcp-Method header mismatch.');
  }
  if (nameHeader && nameHeader !== body.params?.name) {
    return rpcError(body.id ?? null, -32001, 'Mcp-Name header mismatch.');
  }

  if (
    protocolHeader &&
    protocolHeader !== CURRENT_PROTOCOL_VERSION &&
    !LEGACY_PROTOCOL_VERSIONS.includes(protocolHeader)
  ) {
    return rpcError(body.id ?? null, -32000, 'Unsupported MCP protocol version.');
  }

  if (body.id === undefined) {
    return new Response(null, {
      status: 202,
      headers: { ...mcpHeaders, 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  if (body.method === 'server/discover') {
    return rpcResult(body.id, {
      resultType: 'complete',
      supportedVersions: [CURRENT_PROTOCOL_VERSION],
      capabilities: { tools: {} },
      serverInfo: {
        name: 'harrison-rogers-portfolio',
        title: 'Harrison Rogers Portfolio MCP Server',
        version: '1.0.0',
      },
      instructions:
        'Use these read-only tools to retrieve Harrison Rogers\' public profile, projects, and career history.',
      ttlMs: 3600000,
      cacheScope: 'public',
    });
  }

  if (body.method === 'initialize') {
    const requestedVersion = body.params?.protocolVersion;
    const protocolVersion =
      typeof requestedVersion === 'string' &&
      LEGACY_PROTOCOL_VERSIONS.includes(requestedVersion)
        ? requestedVersion
        : LEGACY_PROTOCOL_VERSIONS[0];

    return rpcResult(body.id, {
      protocolVersion,
      capabilities: { tools: { listChanged: false } },
      serverInfo: {
        name: 'harrison-rogers-portfolio',
        title: 'Harrison Rogers Portfolio MCP Server',
        version: '1.0.0',
      },
      instructions:
        'Use these read-only tools to retrieve Harrison Rogers\' public profile, projects, and career history.',
    });
  }

  if (body.method === 'ping') {
    return rpcResult(body.id, { resultType: 'complete' });
  }

  if (body.method === 'tools/list') {
    return rpcResult(body.id, {
      resultType: 'complete',
      tools,
      ttlMs: 3600000,
      cacheScope: 'public',
    });
  }

  if (body.method === 'tools/call') {
    if (!body.params?.name) {
      return rpcError(body.id, -32602, 'Tool name is required.');
    }

    const result = callTool(body);
    if (!result) {
      return rpcError(body.id, -32602, `Unknown tool: ${body.params.name}`);
    }
    return rpcResult(body.id, result);
  }

  return rpcError(body.id, -32601, `Method not found: ${body.method}`, 404);
}

export function OPTIONS(request: Request) {
  if (!isAllowedOrigin(request)) {
    return new Response(null, { status: 403 });
  }

  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Headers':
        'Accept, Content-Type, MCP-Protocol-Version, Mcp-Method, Mcp-Name',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Origin':
        request.headers.get('origin') ?? new URL(request.url).origin,
      Allow: 'POST, OPTIONS',
    },
  });
}
