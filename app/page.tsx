import Navbar from "./components/nav";
import Hero from "./components/hero";
import Tools from "./components/data";
import Methodology from "./components/methodology";
import Results from "./components/results";
import Discussion from "./components/discussion";

export default function Home() {
  
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Tools/>
        <Methodology/>
        <Results/>
        <Discussion/>
      <footer className="">
      </footer>
    </div>
  );
}
