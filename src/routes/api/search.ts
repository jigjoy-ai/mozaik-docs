import { createFileRoute } from '@tanstack/react-router';
import { agentSource, networkSource, source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

const server = createFromSource(
  {
    getPages: () => [...source.getPages(), ...networkSource.getPages(), ...agentSource.getPages()],
    getPageTree: () => ({
      name: 'Docs',
      children: [
        ...source.getPageTree().children,
        ...networkSource.getPageTree().children,
        ...agentSource.getPageTree().children,
      ],
    }),
  } as typeof source,
  {
    language: 'english',
  },
);

export const Route = createFileRoute('/api/search')({
  server: {
    handlers: {
      GET: async ({ request }) => server.GET(request),
    },
  },
});
