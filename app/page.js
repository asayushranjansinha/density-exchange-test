import {
  Animated,
  Featured,
  Footer,
  Hero,
  List,
  Motion,
  SecondaryHero,
  SlidingCards,
  TeamNote,
  Vacancies,
  Work,
} from "@/app/components/index";
export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <div className="container mx-auto h-full px-8 z-0">
        <Hero />
        <Motion>
          <Featured
            title="EQ beates IQ"
            paraOne="People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships."
            paraTwo="They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29K a year."
          />
        </Motion>
        <Motion>
          <SlidingCards />
        </Motion>
        <Motion>
          <SecondaryHero />
        </Motion>
        <Motion>
          <List />
        </Motion>
        <Motion>
          <Featured
            title="Be the best you with EQ"
            paraOne="Not having you own emotions under control might be holding you back."
            paraTwo=" Additionally, not understanding those of others stops you from being
            parent, friend you can be."
          />
        </Motion>
        <Motion>
          <Animated />
        </Motion>
        <Motion>
          <TeamNote />
        </Motion>
        <Motion>
          <Work />
        </Motion>
        <Motion>
          <Vacancies />
        </Motion>
        <Motion>
          <Footer />
        </Motion>
      </div>
    </main>
  );
}
