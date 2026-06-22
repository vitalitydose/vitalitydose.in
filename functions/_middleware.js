export async function onRequest(context) {
  const { request, next } = context;
  
  // Get the normal HTML response from your site
  const response = await next();

  const acceptHeader = request.headers.get('Accept') || '';
  const contentType = response.headers.get('Content-Type') || '';

  // Check if an AI Agent is specifically asking for Markdown
  if (acceptHeader.includes('text/markdown') && contentType.includes('text/html')) {
    let html = await response.text();

    // 1. Remove hidden scripts and styles
    let md = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    md = md.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

    // 2. Focus only on the body content
    const bodyMatch = md.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) md = bodyMatch[1];

    // 3. Convert HTML formatting to Markdown formatting
    md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
    md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
    md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
    md = md.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');
    md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n\n');
    md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');

    // 4. Strip all remaining HTML tags
    md = md.replace(/<[^>]+>/g, '');

    // 5. Clean up weird spacing and HTML entities
    md = md.replace(/&nbsp;/g, ' ')
           .replace(/&amp;/g, '&')
           .replace(/^[ \t]+/gm, '') // remove leading spaces
           .replace(/\n{3,}/g, '\n\n') // collapse multiple empty lines
           .trim();

    // Return the clean Markdown document to the AI Agent
    return new Response(md, {
      status: response.status,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Agent-Markdown-Engine': 'Custom-Edge-Function'
      }
    });
  }

  // If it's a normal human browser, return the beautiful HTML site
  return response;
}
