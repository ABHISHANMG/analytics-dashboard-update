import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const DonutChart = ({ 
  data = [
    { name: 'Direct', value: 300.56, color: '#1c1c1c' },
    { name: 'Affiliate', value: 135.18, color: '#95a4fc' },
    { name: 'Sponsored', value: 154.02, color: '#b1e3ff' },
    { name: 'E-mail', value: 48.96, color: '#baedbd' }
  ],
  totalPercentage = 38.6,
  height = 200,
  showTitle = true,
  showLegend = true,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';

  return (
    <div className={`bg-[#f7f9fb] dark:bg-[#282828] rounded-[8px] p-6 ${textColor} w-[300px]`}>
      {showTitle && <h2 className="text-sm font-semibold text-[#1c1c1c] dark:text-[#fff] mb-4">Total Sales</h2>}
      
      <div className="flex flex-col items-center">
        {/* Donut Chart with Center Percentage */}
        <div className="relative">
          <ResponsiveContainer width={250} height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                cornerRadius={8} // This adds rounded corners to the arcs
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1F2937' : '#ffffff', 
                  border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#fff' : '#000'
                }}
                formatter={(value) => [`$${value}`, '']}
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Percentage Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1c1c1c] dark:text-[#fff]">{totalPercentage}%</div>
            </div>
          </div>
        </div>

        {/* Legend Below Chart */}
        {showLegend && (
          <div className="mt-6 space-y-3 w-full">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                    {item.name}
                  </span>
                </div>
                <span className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">${item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonutChart;
