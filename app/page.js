import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import SecondaryHero from "./components/SecondaryHero/SecondaryHero";
import SlidingCards from "./components/SlidingCards/SlidingCards";
import TeamNote from "./components/TeamNode/TeamNote";
import Vacancies from "./components/Vacancies/Vacancies";
import Work from "./components/Work/Work";

export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <div className="container mx-auto h-full ">
        <Hero />
        <Featured />
        <SlidingCards />
        <SecondaryHero />
        {/* self imp */}
        {/* eq iq */}
        {/* ever wondered */}
        <TeamNote />
        <Work />
        <Vacancies />
      </div>
    </main>
  );
}
