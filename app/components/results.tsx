"use client";
import Image from "next/image";
import beforeflood from "./beforeflood1.png";
import afterflood from "./afterflood1.png";
import piechart from "./piechart.png";
import flooded from "./floodedporto1.png";
import permwater from "./permwaterporto1.png";


export default function Results() {
    const landUseData = [
        { type: "Agricultural Land", area: 42.573, percentage: 61 },
        { type: "Built-Up Areas", area: 1.396, percentage: 2 },
        { type: "Wetlands", area: 16.052, percentage: 23 },
        { type: "Tree Cover", area: 4.187, percentage: 6 },
        { type: "Permanent Water", area: 0.698, percentage: 1 },
        { type: "Grassland", area: 4.885, percentage: 7 },
      ];
  return (
    <section id="results" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Results
        </h2>
        <h3 className="font-bold text-lg p-2">Total flood extent:</h3>
        <p className="p-2 text-sm">Submerged Area: 69.791 km² (equivalent to 9,800 football fields).        </p>
        <h3 className="font-bold text-lg p-2">Temporal Progression:</h3>
        <p className="p-2 text-sm">Peak inundation occurred May 10–20, 2024.        </p>
        <h3 className="font-bold text-lg p-2">Land Cover Impacts:</h3>
        {/* Table Container */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white">Land Use Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white">Area (sq km)</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white">Percentage of total flooded(%)</th>
              </tr>
            </thead>
            <tbody>
              {landUseData.map((landUse, index) => (
                <tr key={index} className="text-center odd:bg-white even:bg-gray-100 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white">{landUse.type}</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white">{landUse.area}</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white">{landUse.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="font-bold text-lg p-2">Key Observations:</h3>
        <p className="p-2 text-sm">Cropland Dominance: 61% of flooded areas were agricultural, threatening regional food security. </p>
        <p className="p-2 text-sm">Wetland Loss: 23% loss of wetlands, critical natural buffers against floods.        </p>
        <p className="p-2 text-sm">Urban Disruption: 1.396 km² of built-up zones flooded, including residential and transport infrastructure.        </p>
        </div>
        {/* Before & After Flood Images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Before Flood</h3>
            <Image src={beforeflood} alt="Before Flood" width={500} height={300} className="rounded-lg shadow-lg mx-auto" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">After Flood</h3>
            <Image src={afterflood} alt="After Flood" width={500} height={300} className="rounded-lg shadow-lg mx-auto" />
          </div>
        </div>

        {/* Flood Extent & Permanent Water Masking Images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Flood Extent</h3>
            <Image src={flooded} alt="Flood Extent" width={500} height={300} className="rounded-lg shadow-lg mx-auto" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Permanent Water Masking</h3>
            <Image src={permwater} alt="Permanent Water Masking" width={500} height={300} className="rounded-lg shadow-lg mx-auto" />
          </div>
        </div>

        {/* Pie Chart for Impact Assessment */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Impact Assessment</h3>
          <Image src={piechart} alt="Impact on land uses" width={500} height={300} className="rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </section>
  );
}
