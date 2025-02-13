"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const discussionPoints = [
  {
    title: "Cropland Vulnerability",
    content: "The inundation of 42.573 km² of croplands underscores the risks of relying on floodplain agriculture. These areas, while fertile, are increasingly untenable as climate extremes intensify.",
  },
  {
    title: "Wetland Degradation",
    content: "Wetlands, which naturally absorb floodwaters, accounted for 23% of losses. Their destruction exacerbates future flood risks, creating a feedback loop of vulnerability.",
  },
  {
    title: "Urban Fragility",
    content: "Built-up areas, though only 2% of flooded zones, highlight misplaced urbanization. Roads and homes in historically flood-prone zones were inundated, reflecting poor adherence to 2013 risk maps.",
  },
  {
    title: "Methodological Precision",
    content: "By masking permanent water, the analysis isolated transient flooding with 98% accuracy. This approach minimizes overestimation errors common in flood mapping",
  },
];

export default function Discussion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="discussion" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Discussion
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center">
        The results reveal systemic failures in balancing development with ecological and hydrological realities.
        </p>

        {/* Collapsible Discussion Points */}
        <div className="mt-10 space-y-4">
          {discussionPoints.map((point, index) => (
            <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              {/* Title Bar */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{point.title}</span>
                {openIndex === index ? <ChevronUp className="text-gray-700 dark:text-gray-300" /> : <ChevronDown className="text-gray-700 dark:text-gray-300" />}
              </button>

              {/* Content (Collapsible) */}
              {openIndex === index && (
                <div className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                  {point.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center pt-16">
          Conclusion
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center">
        The 2024 Porto Alegre flood was a manifestation of ignored warnings and unsustainable land use. 
        Croplands and wetlands bore the brunt, but urban disruptions revealed deeper governance gaps. 
        This study provides a replicable framework for integrating satellite data, hydrological indices, and land cover analytics to guide adaptive planning.
        </p>
      </div>
    </section>
  );
}
