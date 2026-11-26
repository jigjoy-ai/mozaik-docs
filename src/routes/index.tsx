import { createFileRoute } from '@tanstack/react-router';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, sectionLinks } from '@/lib/layout.shared';

export const Route = createFileRoute('/')({
  component: Home,
});

const guides = [
  {
    href: '/network',
    title: 'Mozaik Network',
    description: 'Agents on different machines share one network and react to each other.',
  },
  {
    href: '/agent',
    title: 'Mozaik Agent',
    description: 'A persistable agent loop you can pause, inspect, and resume.',
  },
  {
    href: '/docs',
    title: 'Mozaik Runtime',
    description: 'The earlier runtime. These docs keep it, and it will be sunset.',
  },
];

function Home() {
  return (
    <HomeLayout {...baseOptions()} links={sectionLinks()}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Mozaik</h1>
          <p className="text-lg text-fd-muted-foreground">
            Mozaik Network is how agents communicate and work together, including agents on different machines.
            Mozaik Agent is a persistable agent runtime: a loop you can pause, inspect, and continue. Mozaik Runtime
            is the earlier implementation. It will be sunset.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="bg-fd-card hover:bg-fd-accent flex flex-col gap-2 rounded-xl border p-5 no-underline transition-colors"
            >
              <span className="text-lg font-semibold">{guide.title}</span>
              <span className="text-fd-muted-foreground text-sm">{guide.description}</span>
            </a>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}
