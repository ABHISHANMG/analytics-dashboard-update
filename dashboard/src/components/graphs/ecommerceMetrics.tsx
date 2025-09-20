import { TrendingUp, TrendingDown } from 'lucide-react';
import BarChart from '../graphs/barChart'

const EcommerceMetrics = () => {
  const metrics = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      isPositive: true,
      bgColor: "bg-[#e3f5ff]"
    },
    {
      title: "Orders", 
      value: "1,219",
      change: "-0.03%",
      isPositive: false,
      bgColor: "bg-[#f7f9fb] dark:bg-[#272727]"
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      isPositive: true,
      bgColor: "bg-[#f7f9fb] dark:bg-[#272727]"
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      isPositive: true,
      bgColor: "bg-[#e5ecf6]"
    }
  ];

  return (
    <div className="w-[max-content]">
      <h1 className="text-sm font-semibold mb-5 text-[#1c1c1c] dark:text-[#fff]">eCommerce</h1>
      
      <div className='flex gap-[28px]'>
      <div className="grid grid-cols-2 gap-[28px]">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      <BarChart />
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change, isPositive, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 min-w-[200px] max-w-[202px]`}>
      <h3 className="font-sans font-semibold text-sm leading-5 tracking-normal text-[#1c1c1c] dark:text-[#fff] mb-4">{title}</h3>
      
      <div className="flex items-center justify-between">
        <div className=" font-sans font-semibold text-2xl leading-9 tracking-normal text-[#1c1c1c] dark:text-[#fff]">
          {value}
        </div>
        
        <div className="flex items-center space-x-1">
          <span className="font-sans font-normal text-xs leading-[18px] tracking-normal">
            {change}
          </span>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4 transform -scale-x-100" />
          )}
        </div>
      </div>
    </div>
  );
};

export default EcommerceMetrics;