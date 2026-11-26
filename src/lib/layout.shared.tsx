import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

export function sectionLinks(): NonNullable<BaseLayoutProps['links']> {
  return [
    { text: 'Network', url: '/network', active: 'nested-url' },
    { text: 'Agent', url: '/agent', active: 'nested-url' },
    { text: 'Runtime', url: '/docs', active: 'nested-url' },
  ];
}
