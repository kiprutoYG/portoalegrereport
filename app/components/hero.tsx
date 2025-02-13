"use client";
import Image from "next/image";
import { useState } from "react";
import herobg from "./natural-disaster-concept-with-flood.jpg";

export default function Hero() {
    const [showAbstract, setShowAbstract] = useState(false);
    const [showIntroduction, setShowIntroduction] = useState(false);
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={herobg}
          alt="Flood Mapping Report"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-60"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 px-6 md:px-12 text-white max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Flood Mapping & Analysis Report
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Leveraging geospatial technology to assess and mitigate flood risks.
        </p>

        {/* Buttons to Show Abstract/Introduction */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowAbstract(!showAbstract)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            {showAbstract ? "Hide Abstract" : "View Abstract"}
          </button>

          <button
            onClick={() => setShowIntroduction(!showIntroduction)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            {showIntroduction ? "Hide Introduction" : "View Introduction"}
          </button>
        </div>

        {/* Abstract Section */}
        {showAbstract && (
          <div className="mt-6 p-4 bg-white/20 backdrop-blur-md rounded-lg text-left">
            <h2 className="text-xl font-bold">Abstract</h2>
            <p className="text-gray-200 mt-2 text-sm md:text-base">
            In 2024, Porto Alegre experienced an unprecedented hydrological event as El Niño unleashed its fury upon the city. 
            Using high-resolution Sentinel-2 imagery, Python-driven analysis, and complementary datasets—including the Global Surface Water (GSW) dataset and ESA Land Cover—we meticulously charted the spatial and temporal evolution of the floodwaters. 
            Our analysis reveals that approximately 69.791 km² of the urban landscape was submerged, an area equivalent to over 9,800 football fields or roughly, 13% of the city’s total land area. Beyond this striking figure, the study provides a granular, 
            pixel-by-pixel insight into the flood’s progression and its interaction with urban land uses. This report details our methodology, findings, and the broader implications for future flood preparedness and urban resilience in an era of increasingly extreme weather events.
            </p>
          </div>
        )}

        {/* Introduction Section */}
        {showIntroduction && (
          <div className="mt-6 p-4 bg-white/20 backdrop-blur-md rounded-lg text-left">
            <h2 className="text-xl font-bold">Introduction</h2>
            <p className="text-gray-200 mt-2 text-sm md:text-base">
            When El Niño struck Porto Alegre in 2024, the city was thrust into a scenario reminiscent of a cinematic aquatic apocalypse. 
            Urban streets transformed into flowing rivers, neighborhoods morphed into archipelagos, and the routine hum of city life was drowned out by the relentless surge of floodwaters. 
            This calamity raised pressing questions:
            <ul>
                <li>What factors rendered certain areas most vulnerable?</li>
                <li>How did the urban morphology interact with extreme hydrological forces?</li>
                <li>How did the urban morphology interact with extreme hydrological forces?</li>
                <li>And crucially, what strategies can be employed to mitigate the impact of future events?</li>
            </ul>
            </p>
          </div>
        )}
    </div>
    </section>
  );
}
