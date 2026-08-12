import { jsonResponse } from '@/lib/api';
import { apiDirectory } from '@/lib/portfolio';

export function GET() {
  return jsonResponse(apiDirectory);
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
