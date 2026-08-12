import { projects } from '@/app/projects/projects';
import { jsonResponse } from '@/lib/api';

export function GET(request: Request) {
  const type = new URL(request.url).searchParams.get('type');

  if (type !== null && type !== 'personal' && type !== 'work') {
    return jsonResponse(
      {
        error: {
          code: 'INVALID_PROJECT_TYPE',
          message: 'The type query parameter must be personal or work.',
        },
      },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  const data =
    type === null
      ? projects
      : projects.filter((project) => project.personal === (type === 'personal'));

  return jsonResponse({ data, count: data.length });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Headers': 'Accept, Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      Allow: 'GET, OPTIONS',
    },
  });
}
