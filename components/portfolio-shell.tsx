import {
  Capabilities,
  Contact,
  Ecosystem,
  Footer,
  Header,
  Hero,
  Metrics,
  Philosophy,
  Scale,
  ScrollHud,
  StackOverview,
  Systems,
  Trajectory,
} from "./portfolio-sections";
import SmoothScroll from "./smooth-scroll";

export default function PortfolioShell() {
  return (
    <>
      <SmoothScroll />
      <ScrollHud />
      <Header />
      <main>
        <Hero />
        <Metrics />
        <StackOverview />
        <Capabilities />
        <Systems />
        <Scale />
        <Ecosystem />
        <Trajectory />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
