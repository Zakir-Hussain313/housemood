import Advantages from "@/components/LandingPage/Advantages";
import FAQ from "@/components/LandingPage/FAQ";
import Hero from "@/components/LandingPage/Hero";
import InfiniteBelt from "@/components/LandingPage/infiniteBelt";
import Process from "@/components/LandingPage/Process";
import Projects from "@/components/LandingPage/Projects";
import Stats from "@/components/LandingPage/Stats";
import Team from "@/components/LandingPage/Team";
import Testimonials from "@/components/LandingPage/testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Process />
      <Team />
      <FAQ />
      <InfiniteBelt />
      <Testimonials />
      <Advantages />
    </>
  )
}