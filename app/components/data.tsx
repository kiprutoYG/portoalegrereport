"use client";
import {Globe, Map , Satellite, Code } from "lucide-react";

const tools = [
  { name: "Sentinel-2 Imagery", icon: <Satellite size={40} />, description: "At the heart of our analysis lies Sentinel-2 imagery, a cornerstone of the European Space Agency’s Copernicus program. With a spatial resolution of 10 meters and frequent revisit times, these satellite images provide an exceptional vantage point to observe temporal changes in land surface conditions. The pre-, during-, and post-flood imagery enabled us to discern the dynamic evolution of floodwaters with remarkable precision." },
  { name: "ESA WorldCover", icon: <Globe size={40} />, description: "Contextual understanding of the land cover types in Porto Alegre was facilitated by the ESA Land Cover dataset. By classifying urban areas, vegetation, bare soil, and other land uses, we could overlay our flood maps with detailed land use information, offering insights into which sectors of the city were most affected by the floods." },
  { name: "Global Surface Water (GSW) Dataset", icon: <Map size={40} />, description: "The GSW dataset, developed by the European Commission's Joint Research Centre, provided a historical baseline of water bodies across the globe. This resource was critical in distinguishing between permanent water features and transient floodwaters, thereby enabling a more accurate delineation of the inundation area during the El Niño event." },
  { name: "Geemap & Python", icon: <Code size={40} />, description: "Python served as the computational backbone of our project—we were able to efficiently process satellite data, execute complex calculations, and generate visualizations that communicate our findings in an accessible format." },
];

export default function Tools() {
  return (
    <section id="data" className="py-16 bg-sec bg-opacity-40">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">
          Data & Analytical Tools
        </h2>
        <p className="mt-4 text-lg text-gray-700 ">
          The flood mapping project leverages cutting-edge geospatial datasets and analytical tools.
        </p>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white  shadow-lg p-6 rounded-lg flex flex-col items-center">
              <div className="text-blue-600 ">{tool.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900  lg:text-2xl">{tool.name}</h3>
              <p className="mt-2 text-gray-700 text-sm text-center lg:text-lg">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
