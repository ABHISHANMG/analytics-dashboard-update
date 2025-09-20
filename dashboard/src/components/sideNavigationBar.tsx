import { useState } from 'react';

import {
    ChevronRight,
    ChevronDown,
    PieChart,
    Contact,
    IdCard,
    ShoppingBag,
} from 'lucide-react';

import NotebookIcon from './icons/notebook';
import UserIcon from './icons/userIcon';
import ConversationIcon from './icons/conversationIcon';
import FilesIcon from './icons/filesIcon';
import BookmarkIcon from './icons/bookmarkIcon';


const DashboardSidebar = () => {
    const [expandedSections, setExpandedSections] = useState({
        userProfile: true
    });

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <aside className="w-[212px] bg-[#ffffff] dark:bg-[#1c1c1c] transition-colors duration-500 border-r border-[#e8e8e8] dark:border-[#333333] h-screen overflow-y-auto">
            <div className="p-4">
                {/* User Profile Section */}
                <div className="flex items-center space-x-3 mb-8">
                    <div className="rounded-full flex items-center justify-center">
                        <img src="/src/assets/avaterLogo.png" className='w-[24px] h-[24px]' alt="ByeWind" />
                    </div>
                    <span className="font-sans font-normal text-sm leading-5 tracking-normal text-[#1c1c1c] dark:text-[#fff]">ByeWind</span>
                </div>

                {/* Favorites and Recently */}
                <div className="flex space-x-6">
                    <button className="font-sans font-normal text-sm leading-5 tracking-normal text-center align-middle pb-2 text-[#a3a3a3] dark:text-[#787878]">
                        Favorites
                    </button>
                    <button className="font-sans font-normal text-sm leading-5 tracking-normal text-center align-middle pb-2 text-[#d1d1d1] dark:text-[#4a4a4a]">
                        Recently
                    </button>
                </div>

                {/* Quick Navigation */}
                <div className="mb-2">
                    <NavItem icon="•" label="Overview" />
                    <NavItem icon="•" label="Projects" />
                </div>

                {/* Dashboards Section */}
                <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Dashboards
                    </h3>
                    <div className="space-y-1">
                        <NavItem
                            icon={<PieChart className="w-[20px] h-[20px]" />}
                            label="Default"
                            isActive={true}
                        />
                        <NavItem
                            icon={<ShoppingBag className="w-[20px] h-[20px]" />}
                            label="eCommerce"
                            hasChevron={true}
                        />
                        <NavItem
                            icon={<FilesIcon />}
                            label="Projects"
                            hasChevron={true}
                        />
                        <NavItem
                            icon={<BookmarkIcon />}
                            label="Online Courses"
                            hasChevron={true}
                        />
                    </div>
                </div>

                {/* Pages Section */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Pages
                    </h3>
                    <div className="space-y-1">

                        {/* User Profile - Expandable */}
                        <div>
                            <button
                                onClick={() => toggleSection('userProfile')}
                                className="w-full flex items-center justify-between p-2 text-sm text-[#1c1c1c] dark:text-[#fff] hover:bg-[#f4f4f4] hover:dark:bg-[#333333] rounded-md"
                            >
                                {expandedSections.userProfile ? (
                                    <ChevronDown className="w-[20px] h-[20px]" />
                                ) : (
                                    <ChevronRight className="w-[20px] h-[20px]" />
                                )}
                                <div className="flex items-center space-x-2">
                                    <Contact className="w-[20px] h-[20px]" />
                                    <span>User Profile</span>
                                </div>

                            </button>

                            {expandedSections.userProfile && (
                                <div className="ml-6 mt-1 space-y-1 text-[#1c1c1c] dark:text-[#fff]">
                                    <SubNavItem label="Overview" />
                                    <SubNavItem label="Projects" />
                                    <SubNavItem label="Campaigns" />
                                    <SubNavItem label="Documents" />
                                    <SubNavItem label="Followers" />
                                </div>
                            )}
                        </div>

                        <NavItem
                            icon={<IdCard className="w-[20px] h-[20px]" />}
                            label="Account"
                            hasChevron={true}
                        />
                        <NavItem
                            icon={<UserIcon />}
                            label="Corporate"
                            hasChevron={true}
                        />
                        <NavItem
                            icon={<NotebookIcon />}
                            label="Blog"
                            hasChevron={true}
                        />
                        <NavItem
                            icon={<ConversationIcon />}
                            label="Social"
                            hasChevron={true}
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
};

const NavItem = ({ icon, label, isActive = false, hasChevron = false }) => {
    return (
        <div className={`flex items-center p-2 rounded-md text-[#1c1c1c] dark:text-[#fff] ${isActive
            ? 'bg-[#f4f4f4] dark:bg-[#333333] dark:text-[#1c1c1c]'
            : 'hover:bg-[#f4f4f4] hover:dark:bg-[#333333]'
            }`}>
            {hasChevron && (
                <ChevronRight className="w-[20px] h-[20px]" />
            )}
            <div className="flex items-center space-x-2">
                {typeof icon === 'string' ? (
                    <span className="w-[20px] h-[20px] flex items-center justify-center text-[#1c1c1c] dark:text-[#fff] font-bold">
                        {icon}
                    </span>
                ) : (
                    <span className="text-[#1c1c1c] dark:text-[#fff]">{icon}</span>
                )}
                <span className="text-sm font-medium">{label}</span>
            </div>
        </div>
    );
};

const SubNavItem = ({ label }) => {
    return (
        <div className="p-2 text-sm text-[#1c1c1c] dark:text-[#fff] hover:bg-[#f4f4f4] hover:dark:bg-[#333333] rounded-md cursor-pointer">
            {label}
        </div>
    );
};

export default DashboardSidebar;