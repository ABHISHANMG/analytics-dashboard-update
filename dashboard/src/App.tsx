import './App.css'

import BarChart from './components/graphs/barChart'
import EcommerceMetrics from './components/graphs/ecommerceMetrics'
import Header from './components/header'
import SideNavigationBar from './components/sideNavigationBar'

function App() {

  return (
    <div className='h-[100vh] bg-[#fff] dark:bg-[#1c1c1c] flex w-full'>
      <SideNavigationBar />
      <div className='flex flex-col w-full'>
        <Header />
       <div className='p-[30px]'>
       <div className='flex gap-[30px]'>
          <EcommerceMetrics />
          {/* <BarChart /> */}
        </div>
       </div>
      </div>
    </div>
  )
}

export default App
