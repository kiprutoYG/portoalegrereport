"use client";

const steps = [
  {
    title: "Preprocessing",
    description: "Data preprocessing involved geometric and radiometric corrections of the Sentinel-2 imagery to ensure that temporal comparisons were both accurate and reliable.",
  },
  {
    title: "MNDWI Calculation",
    description: "To effectively delineate water from non-water surfaces, we computed the Modified Normalized Difference Water Index (MNDWI). This index leverages the differential reflectance properties of water in the green and short-wave infrared (SWIR) bands. A carefully selected threshold was applied to the MNDWI images, isolating pixels corresponding to water bodies. This approach provided a robust mechanism to identify flooded areas with minimal confusion from other land features.",
  },
  {
    title: "Flood Extent Mapping",
    description: "Using the thresholded MNDWI images, we generated detailed maps of the flood extent. These maps traced the progression of the floodwaters, capturing the spatial spread of the inundation.",
  },
  {
    title: "Permanent Water Masking",
    description: "To refine our analysis, we overlaid the MNDWI-derived flood extent with the historical water maps from the GSW dataset. This masking process effectively removed permanent water bodies (e.g., rivers (River Guiaba) and lakes that are a constant feature in Porto Alegre) from the analysis, ensuring that our flood maps exclusively reflected the transient inundation caused by the El Niño event.",
  },
  {
    title: "Impact Assessment",
    description: "Finally, the refined flood maps were integrated with the ESA Land Cover data. This integration allowed us to assess the impact of the flood on various land use categories—distinguishing between urban, vegetative, and other land types. The analysis provided a nuanced picture of how different sectors of Porto Alegre were impacted, informing targeted strategies for flood mitigation and urban planning..",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-16 bg-sec bg-opacity-30 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Methodology
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Our flood mapping approach follows a structured workflow.
        </p>

        {/* Methodology Vertical Flow */}
        <div className="mt-10 flex flex-col items-center space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Box */}
              <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg w-80 md:w-96 lg:w-1/2 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm md:text-lg">{step.description}</p>
              </div>

              {/* Arrow (Except for Last Step) */}
              {index < steps.length - 1 && (
                <span className="text-3xl text-gray-500 dark:text-gray-400 mt-2">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
