import Animated from "./components/Animated/Animated";
import Featured from "./components/Featured/Featured";
import Featured2 from "./components/Featured/Featured2";
import Hero from "./components/Hero/Hero";
import SecondaryHero from "./components/SecondaryHero/SecondaryHero";
import SlidingCards from "./components/SlidingCards/SlidingCards";
import TeamNote from "./components/TeamNode/TeamNote";
import Vacancies from "./components/Vacancies/Vacancies";
import Work from "./components/Work/Work";
import Test from "./components/Test";
import List from "./components/list/List";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <div className="container mx-auto h-full px-8">
        {/* <Test /> */}
        <Hero />
        <Featured />
        <SlidingCards />
        <SecondaryHero />
        <List />
        <Featured2 />
        <Animated />
        <TeamNote />
        <Work />
        <Vacancies />
        <Footer />
      </div>
    </main>
  );
}
