import Header from "../components/header"
import OrderListTable from "../components/orderList"
import SideNavigationBar from "../components/sideNavigationBar"

const Order = () => {
  return (
    <div className="flex h-screen">
      <SideNavigationBar />
      <div className='flex flex-col w-full'>
        <Header />
        <div className="overflow-auto h-screen">
        <OrderListTable/>
        </div>
      </div>
    </div>
  )
}

export default Order