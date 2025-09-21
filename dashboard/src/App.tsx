import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import EcommerceMetrics from './components/graphs/ecommerceMetrics'
import RevenueChart from "./components/graphs/revenueChart"
import DonutChart from "./components/graphs/DonutChart"
import TopSellingProductsTable from "./components/table"
import Header from './components/header'
import SideNavigationBar from './components/sideNavigationBar'
import WorldMapChart from './components/graphs/worldmapChart'
import NotificationPanel from './components/notificationPanel'
import Order from './pages/order'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {

  return (
    <div className='h-screen overflow-auto bg-[#fff] dark:bg-[#1c1c1c] flex w-full'>
      <SideNavigationBar />
      <div className='flex flex-col w-full h-screen overflow-auto'>
        <Header />
        <div className='p-[30px]'>
          <div className='flex gap-[30px]'>
            <EcommerceMetrics />
          </div>

          <div className="grid grid-cols-4 gap-[28px] mt-[20px] h-screen">
            {/* Row 1 */}
            <div className='col-span-3'>
              <RevenueChart
                currentWeekValue={75000}
                previousWeekValue={68000}
                showLegend={true}
              />
            </div>
            <div className='col-span-1'>
              <WorldMapChart />
            </div>

            {/* Row 2 */}
            <div className='col-span-3'>
              <TopSellingProductsTable />
            </div>
            <div className='col-span-1'>
              <DonutChart totalPercentage={42.1} showLegend={true} />
            </div>
          </div>
      
        </div>
      </div>
      <NotificationPanel/>
    </div>
  )
}
