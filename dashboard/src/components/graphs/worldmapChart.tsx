import WorldMap from "react-svg-worldmap";

const WorldmapGraph = () => {
  const data = [
    { country: "us", value: 72000 }, // New York
    { country: "us", value: 39000 }, // San Francisco
    { country: "au", value: 25000 }, // Sydney
    { country: "sg", value: 61000 }, // Singapore
  ];

  const bars = [
    { name: "New York", value: 72000 },
    { name: "San Francisco", value: 39000 },
    { name: "Sydney", value: 25000 },
    { name: "Singapore", value: 61000 },
  ];

  const max = Math.max(...bars.map(b => b.value));

  return (
    <div className="bg-[#f7f9fb] dark:bg-[#282828] rounded-[8px] p-6 w-[300px]">
      <h2 className="text-sm font-semibold text-[#1c1c1c] dark:text-[#fff] mb-4">Revenue by Location</h2>
      <WorldMap
        color="#111827"
        backgroundColor="#F9FAFB"
        value-suffix="people"
        size="sm"
        data={data}
        frame={false}
      />

      <div className="mt-6 space-y-5">
        {bars.map(b => (
          <div key={b.name}>
            <div className="flex justify-between mb-1">
              <span className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">{b.name}</span>
              <span className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                {Math.round(b.value / 1000)}K
              </span>
            </div>
            <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className="h-[2px] bg-[#87aecd] dark:bg-[#87aecd] rounded-full"
                style={{ width: `${(b.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldmapGraph;
