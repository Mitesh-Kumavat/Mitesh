import { NextResponse } from 'next/server';

export function middleware() {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Maintenance Mode</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">🚧 Under Development</h1>
        <p class="text-lg text-gray-600 mb-6">This site is in standby mode. Please check back later.</p>
        <p class="text-sm text-gray-500 mb-2">- Mitesh Kumavat</p>
        <a href="https://github.com/mitesh-kumavat" target="_blank" class="text-blue-600 hover:underline text-sm">
          🔗 Visit my GitHub
        </a>
      </div>
    </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 503,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
