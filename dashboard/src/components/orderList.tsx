import { useState } from 'react';

import { Plus, Menu, ArrowUpDown, Calendar, ChevronLeft, ChevronRight, MoreHorizontal, SearchIcon, ClipboardList } from 'lucide-react';

const OrderListTable = () => {
    const [selectedOrders, setSelectedOrders] = useState(['#CM9804']);
    const [currentPage, setCurrentPage] = useState(1);

    const orders = [
        {
            id: '#CM9801',
            user: { name: 'Natali Craig', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
            project: 'Landing Page',
            address: 'Meadow Lane Oakland',
            date: 'Just now',
            status: 'In Progress',
            statusColor: 'bg-blue-100 text-blue-800'
        },
        {
            id: '#CM9802',
            user: { name: 'Kate Morrison', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' },
            project: 'CRM Admin pages',
            address: 'Larry San Francisco',
            date: 'A minute ago',
            status: 'Complete',
            statusColor: 'bg-green-100 text-green-800'
        },
        {
            id: '#CM9803',
            user: { name: 'Drew Cano', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
            project: 'Client Project',
            address: 'Bagwell Avenue Ocala',
            date: '1 hour ago',
            status: 'Pending',
            statusColor: 'bg-blue-100 text-blue-800'
        },
        {
            id: '#CM9804',
            user: { name: 'Orlando Diggs', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
            project: 'Admin Dashboard',
            address: 'Washburn Baton Rouge',
            date: 'Yesterday',
            status: 'Approved',
            statusColor: 'bg-yellow-100 text-yellow-800'
        },
        {
            id: '#CM9805',
            user: { name: 'Andi Lane', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face' },
            project: 'App Landing Page',
            address: 'Nest Lane Olivette',
            date: 'Feb 2, 2023',
            status: 'Rejected',
            statusColor: 'bg-gray-100 text-gray-800',
            hasLink: true
        },
        {
            id: '#CM9801',
            user: { name: 'Natali Craig', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b15b?w=32&h=32&fit=crop&crop=face' },
            project: 'Landing Page',
            address: 'Meadow Lane Oakland',
            date: 'Just now',
            status: 'In Progress',
            statusColor: 'bg-blue-100 text-blue-800'
        },
        {
            id: '#CM9802',
            user: { name: 'Kate Morrison', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' },
            project: 'CRM Admin pages',
            address: 'Larry San Francisco',
            date: 'A minute ago',
            status: 'Complete',
            statusColor: 'bg-green-100 text-green-800'
        },
        {
            id: '#CM9803',
            user: { name: 'Drew Cano', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
            project: 'Client Project',
            address: 'Bagwell Avenue Ocala',
            date: '1 hour ago',
            status: 'Pending',
            statusColor: 'bg-blue-100 text-blue-800'
        },
        {
            id: '#CM9804',
            user: { name: 'Orlando Diggs', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
            project: 'Admin Dashboard',
            address: 'Washburn Baton Rouge',
            date: 'Yesterday',
            status: 'Approved',
            statusColor: 'bg-yellow-100 text-yellow-800'
        },
        {
            id: '#CM9805',
            user: { name: 'Andi Lane', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face' },
            project: 'App Landing Page',
            address: 'Nest Lane Olivette',
            date: 'Feb 2, 2023',
            status: 'Rejected',
            statusColor: 'bg-gray-100 text-gray-800'
        }
    ];

    const handleSelectOrder = (orderId: string) => {
        setSelectedOrders(prev =>
            prev.includes(orderId)
                ? prev.filter(id => id !== orderId)
                : [...prev, orderId]
        );
    };

    const handleSelectAll = () => {
        setSelectedOrders(selectedOrders.length === orders.length ? [] : orders.map(order => order.id));
    };

    return (
        <div className="dark:bg-[#1c1c1c]">
            <div className="flex flex-col justify-between gap-7 p-6 border-b border-[#e8e8e8] dark:border-[#333333]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-sm font-semibold text-[#1c1c1c] dark:text-[#fff]">Order List</h1>

                </div>
                <div className='flex justify-between w-full bg-[#f7f9fb] dark:bg-[#272727] p-2 rounded-[10px]'>
                    <div className="flex items-center gap-2 ">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Plus className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Menu className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ArrowUpDown className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                    <div className="px-[10px] py-1.5 flex text-[#bdbdbd] dark:text-[#5c5c5c] text-[14px] justify-between text-sm bg-[#f4f4f4] dark:bg-[#333333] rounded-[8px] w-64">
                        <div className='flex items-center gap-[5px] '>
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Search"
                                className='placeholder-[#bdbdbd] dark:placeholder-[#5c5c5c] font-sans font-normal text-sm leading-5 tracking-normal'
                            />
                        </div>
                        ⌘J
                    </div>

                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className=" border-b border-[#e8e8e8] dark:border-[#333333]">
                        <tr>
                            <th className="w-12 px-6 py-3 text-left">
                                <input
                                    type="checkbox"
                                    checked={selectedOrders.length === orders.length}
                                    onChange={handleSelectAll}
                                    className="w-4 h-4 accent-[#1c1c1c] dark-[#c6c7f8] border-gray-300 rounded focus:ring-blue-500"
                                />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="w-12 px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e8e8e8]  dark:divide-[#333333]">
                        {orders.map((order, index) => (
                            <tr
                                key={`${order.id}-${index}`}
                                className={`hover:bg-[#f7f9fb] dark:hover:bg-[#272727]`}
                            >
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedOrders.includes(order.id)}
                                        onChange={() => handleSelectOrder(order.id)}
                                        className="w-4 h-4 accent-[#1c1c1c] dark-[#c6c7f8] border-gray-300 rounded cursor-pointer"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={order.user.avatar}
                                            alt={order.user.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <span className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">{order.user.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                                    {order.project}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                                    <div className="flex items-center gap-1">
                                        {order.address}
                                        {order.hasLink && <ClipboardList className="w-4 h-4 text-gray-400" />}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        {order.date}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${order.statusColor}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="p-1 hover:bg-gray-100 rounded">
                                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-end px-6 py-4 border-t border-[#e8e8e8] dark:border-[#333333]">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className="p-2 hover:bg-[#e8e8e8] dark:hover:bg-[#333333] rounded-lg disabled:opacity-50 cursor-pointer"
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="w-5 h-5 text-[#1c1c1c] dark:text-[#fff]" />
                    </button>
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-2 text-sm rounded-lg cursor-pointer ${currentPage === page
                                    ? 'bg-[#e8e8e8] dark:bg-[#333333] text-[#1c1c1c] dark:text-[#fff]'
                                    : 'text-[#1c1c1c] dark:text-[#fff] hover:bg-gray-100'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderListTable;