import { createFileRoute, notFound } from '@tanstack/react-router';
import { agentSource, getLLMText } from '@/lib/source';

export const Route = createFileRoute('/llms.mdx/agent/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const slugs = params._splat?.split('/') ?? [];
        slugs.pop();
        const page = agentSource.getPage(slugs);
        if (!page) throw notFound();

        return new Response(await getLLMText(page), {
          headers: {
            'Content-Type': 'text/markdown',
          },
        });
      },
    },
  },
});
