import { createFileRoute, notFound } from '@tanstack/react-router';
import { getLLMText, networkSource } from '@/lib/source';

export const Route = createFileRoute('/llms.mdx/network/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const slugs = params._splat?.split('/') ?? [];
        slugs.pop();
        const page = networkSource.getPage(slugs);
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
