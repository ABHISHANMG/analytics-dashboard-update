import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const BarChartMetrics = () => {
  const data = [
    {
      month: 'Jan',
      actuals: 20,
      projections: 0
    },
    {
      month: 'Feb',
      actuals: 20,
      projections: 5
    },
    {
      month: 'Mar',
      actuals: 18,
      projections: 3
    },
    {
      month: 'Apr',
      actuals: 22,
      projections: 6
    },
    {
      month: 'May',
      actuals: 15,
      projections: 3
    },
    {
      month: 'Jun',
      actuals: 20,
      projections: 5
    }
  ];

  const formatYAxisLabel = (value) => {
    if (value === 0) return '0';
    return `${value}M`;
  };

  return (
    <div className="bg-[#f7f9fb] dark:bg-[#282828] w-[432px] h-[252px] min-w-[400px] gap-4 rotate-0 opacity-100 rounded-[16px] p-6">
      <h2 className="text-sm font-semibold text-[#1c1c1c] dark:text-[#fff] mb-8">
        Projections vs Actuals
      </h2>
      
      <div className="w-[450px] relative h-[180px] right: 42px;">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
            barCategoryGap="25%"
          >
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#e5e7eb" 
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 14 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 14 }}
              tickFormatter={formatYAxisLabel}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Bar 
              dataKey="actuals" 
              stackId="a"
              fill="#7dd3fc" 
              radius={[0, 0, 4, 4]}
            />
            <Bar 
              dataKey="projections" 
              stackId="a"
              fill="#a5d4ed" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartMetrics;