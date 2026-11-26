import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

const docsOptions = {
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
} as const;

export const docs = defineDocs({
  dir: 'content/docs',
  ...docsOptions,
});

export const network = defineDocs({
  dir: 'content/network',
  ...docsOptions,
});

export const agent = defineDocs({
  dir: 'content/agent',
  ...docsOptions,
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
  },
});
