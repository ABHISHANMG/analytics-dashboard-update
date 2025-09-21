import { TrendingUp, TrendingDown } from 'lucide-react';

import BarChart from '../graphs/barChart'

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  bgColor: string;
}

const EcommerceMetrics = () => {

  const rawMetrics = [
    { title: "Customers", value: "3,781", change: "+11.01%", isPositive: true, bgColor: "bg-[#e3f5ff] text-[#1c1c1c]" },
    { title: "Orders",    value: "1,219", change: "-0.03%", isPositive: false, bgColor: "bg-[#f7f9fb] dark:bg-[#1c1c1c] text-[#1c1c1c] dark:text-[#fff]" },
    { title: "Revenue",   value: "$695",  change: "+15.03%", isPositive: true, bgColor: "bg-[#f7f9fb] dark:bg-[#1c1c1c] text-[#1c1c1c] dark:text-[#fff]" },
    { title: "Growth",    value: "30.1%", change: "+6.08%", isPositive: true, bgColor: "bg-[#e3f5ff] text-[#1c1c1c]" }
  ];

  return (
    <div className="w-full">
      <h1 className="text-sm font-semibold mb-5 text-[#1c1c1c] dark:text-[#fff]">eCommerce</h1>
      
      <div className='flex gap-[28px]'>
      <div className="grid grid-cols-2 gap-[28px]">
        {rawMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      <BarChart />
      </div>
    </div>
  );
};

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 min-w-[200px] max-w-[202px]`}>
      <h3 className="font-sans font-semibold text-sm leading-5 tracking-normal mb-4">{title}</h3>
      
      <div className="flex items-center justify-between">
        <div className=" font-sans font-semibold text-2xl leading-9 tracking-normal">
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