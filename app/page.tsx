import Navbar from "./components/nav";
import Hero from "./components/hero";
import Tools from "./components/data";
import Methodology from "./components/methodology";
import Results from "./components/results";
import Discussion from "./components/discussion";
import Conclusion from "./components/conclusion";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Tools/>
        <Methodology/>
        <Results/>
        <Discussion/>
        <Conclusion/>
      <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold">Flood Mapping Report</p>
        <p className="mt-2 text-sm">
          &copy; {currentYear} | Created by <span className="font-bold">TriGIS</span>
        </p>
        <p className="mt-1 text-xs opacity-75">Data sourced from Sentinel-2 & Global Surface Water datasets.</p>
      </div>
      </footer>
    </div>
  );
}
