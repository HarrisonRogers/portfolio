import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer API and MCP Documentation',
  description:
    'Public REST API, OpenAPI specification, and MCP server documentation for Harrison Rogers and harrisonrogers.dev.',
  alternates: { canonical: '/developers' },
};

const endpoints = [
  {
    method: 'GET',
    path: '/api/profile',
    description: 'Public professional profile, skills, and contact links.',
  },
  {
    method: 'GET',
    path: '/api/projects',
    description: 'Public projects. Filter with ?type=personal or ?type=work.',
  },
  {
    method: 'GET',
    path: '/api/career',
    description: 'Public employment history.',
  },
];

export default function DevelopersPage() {
  return (
    <div>
      <h1 className="text-5xl mb-7 font-instrument-serif tracking-wide">
        Developer API &amp; MCP Docs
      </h1>

      <p className="mb-5">
        harrisonrogers.dev provides a free, unauthenticated, read-only API and
        Model Context Protocol server for Harrison Rogers&apos; public portfolio
        data. JSON responses support cross-origin access.
      </p>

      <section className="mt-9">
        <h2 className="text-2xl font-semibold mb-3">REST API</h2>
        <p className="mb-4">
          Base URL:{' '}
          <Link className="underline" href="/api">
            https://harrisonrogers.dev/api
          </Link>
        </p>
        <div className="space-y-5">
          {endpoints.map((endpoint) => (
            <div key={endpoint.path}>
              <h3 className="font-mono text-sm">
                {endpoint.method}{' '}
                <Link className="underline" href={endpoint.path}>
                  {endpoint.path}
                </Link>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {endpoint.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5">
          The complete machine-readable contract is available at{' '}
          <Link className="underline" href="/openapi.json">
            /openapi.json
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">MCP server</h2>
        <p>
          Connect an MCP client to{' '}
          <code className="font-mono text-sm">
            https://harrisonrogers.dev/mcp
          </code>{' '}
          using Streamable HTTP. The server is stateless, requires no
          authentication, and exposes three read-only tools:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>
            <code>get_profile</code>
          </li>
          <li>
            <code>list_projects</code>
          </li>
          <li>
            <code>list_career</code>
          </li>
        </ul>
        <p className="mt-4">
          MCP clients can discover server metadata at{' '}
          <Link className="underline" href="/.well-known/mcp.json">
            /.well-known/mcp.json
          </Link>
          . The server supports MCP 2026-07-28 and compatible legacy
          initialization through 2025-03-26.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Agent resources</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link className="underline" href="/llms.txt">
              llms.txt
            </Link>{' '}
            — concise discovery index
          </li>
          <li>
            <Link className="underline" href="/llms-full.txt">
              llms-full.txt
            </Link>{' '}
            — full API and MCP reference
          </li>
          <li>
            <Link className="underline" href="/openapi.json">
              OpenAPI 3.1 specification
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
