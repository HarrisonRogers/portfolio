import { careers } from '@/app/career/careers';
import { jsonResponse } from '@/lib/api';

export function GET() {
  return jsonResponse({ data: careers, count: careers.length });
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
