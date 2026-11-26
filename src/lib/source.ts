import { InferPageType, loader } from 'fumadocs-core/source';
import { agent, docs, network } from 'collections/server';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { agentContentRoute, docsContentRoute, docsRoute, networkContentRoute } from './shared';

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: docsRoute,
  plugins: [lucideIconsPlugin()],
});

export const networkSource = loader({
  source: network.toFumadocsSource(),
  baseUrl: '/network',
  plugins: [lucideIconsPlugin()],
});

export const agentSource = loader({
  source: agent.toFumadocsSource(),
  baseUrl: '/agent',
  plugins: [lucideIconsPlugin()],
});

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  return {
    segments: [...page.slugs, 'content.md'],
    url: contentMarkdownUrl(docsContentRoute, page),
  };
}

export function contentMarkdownUrl(base: string, page: { slugs: string[] }) {
  return `${base}/${[...page.slugs, 'content.md'].join('/')}`;
}

export { networkContentRoute, agentContentRoute };

type MarkdownPage = {
  url: string;
  data: {
    title: string;
    getText: (mode: 'processed') => Promise<string>;
  };
};

export async function getLLMText(page: MarkdownPage) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
