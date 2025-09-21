import useTheme from '../components/hooks/index';

import CollapseIcon from './icons/collapseIcon';
import DarkModeIcon from './icons/darkModeIcon';
import HistoryIcon from './icons/historyIcon';
import LightModeIcon from './icons/lightModeIcon';
import NotificationIcon from './icons/notificationIcon';
import SearchIcon from './icons/searchIcon';
import StarIcon from './icons/starIcon';

export default function Header() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (

    <header className="bg-[#ffffff] dark:bg-[#1c1c1c] border-b  border-[#e8e8e8] dark:border-[#333333] px-4 py-3 w-full">
      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-4">

          <button className="p-1 text-[#1c1c1c] dark:text-[#fff]">
            <CollapseIcon />
          </button>

          <button className="p-1 text-[#1c1c1c] dark:text-[#fff]">
            <StarIcon />
          </button>

          <nav className="flex items-center space-x-6">
            <span className="text-[#a3a3a3] dark:text-[#787878] text-sm font-medium font-sans leading-5 tracking-normal text-center align-middle">Dashboards</span>
            <span className="text-[#a3a3a3] dark:text-[#787878] text-sm font-medium font-sans leading-5 tracking-normal text-center align-middle">/</span>
            <span className="text-[#1c1c1c] dark:text-[#ffffff] text-sm font-medium font-sans leading-5 tracking-normal text-center align-middle">Default</span>
          </nav>
        </div>

        <div className="flex items-center space-x-4">

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

          <div className="flex items-center space-x-2 gap-1 text-[#1c1c1c] dark:text-[#fff]">
            <button
              onClick={toggleTheme}
              className="p-2 rounded cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' && (
                <LightModeIcon/>
              )}
              {theme === 'light' && (
                <DarkModeIcon/>
              )}
            </button>

            <button>
              <HistoryIcon />
            </button>

            <button >
              <NotificationIcon />
            </button>

            <button>
              <CollapseIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
