import { FinalCta, Hero, Participate, Proposals, Results, Stats, Timeline, WhoIs, WhyEdinho } from './sections';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Results />
      <Timeline />
      <WhoIs />
      <Proposals />
      <WhyEdinho />
      <Participate />
      <FinalCta />
    </main>
  );
}
