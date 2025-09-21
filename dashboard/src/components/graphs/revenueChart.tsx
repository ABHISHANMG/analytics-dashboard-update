import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const RevenueChart = ({ 
  data = [
    { month: 'Jan', current: 12, previous: 15 },
    { month: 'Feb', current: 18, previous: 12 },
    { month: 'Mar', current: 15, previous: 10 },
    { month: 'Apr', current: 12, previous: 16 },
    { month: 'May', current: 19, previous: 18 },
    { month: 'Jun', current: 22, previous: 20 }
  ],
  currentWeekValue = 58211,
  previousWeekValue = 68768,
  height = 325,
  showTitle = true,
  showLegend = true,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const gridColor = isDark ? '#374151' : '#e5e7eb';
  const axisColor = isDark ? '#9CA3AF' : '#6b7280';

  return (
    <div className={`bg-[#f7f9fb] dark:bg-[#282828] rounded-lg p-6 ${textColor} w-full`}>
      <div className="flex justify-between items-center mb-4">
        {showTitle && <h2 className="text-sm font-semibold text-[#1c1c1c] dark:text-[#fff] mb-8">Revenue</h2>}
        {showLegend && (
          <div className="flex gap-6 text-sm">
            <span className="flex items-center gap-2 font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              Current Week ${currentWeekValue.toLocaleString()}
            </span>
            <span className="flex items-center gap-2 font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              Previous Week ${previousWeekValue.toLocaleString()}
            </span>
          </div>
        )}
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            dataKey="month" 
            stroke={axisColor}
            tick={{ fill: axisColor }}
          />
          <YAxis 
            stroke={axisColor}
            tick={{ fill: axisColor }}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? '#1F2937' : '#ffffff', 
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: isDark ? '#fff' : '#000'
            }}
            formatter={(value) => [`${value}M`, '']}
          />
          <Line 
            type="monotone" 
            dataKey="current" 
            stroke="#60A5FA" 
            strokeWidth={3}
            dot={{ fill: '#60A5FA', strokeWidth: 2, r: 6 }}
            name="Current Week"
          />
          <Line 
            type="monotone" 
            dataKey="previous" 
            stroke="#9CA3AF" 
            strokeWidth={3}
            strokeDasharray="10 5"
            dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 6 }}
            name="Previous Week"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;