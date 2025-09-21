import { Bug, User, Radio } from 'lucide-react';

const NotificationPanel = () => {
  const notifications = [
    {
      id: 1,
      icon: <Bug className="w-5 h-5 text-[#1C1C1C]" />,
      text: "You have a bug that needs...",
      time: "Just now"
    },
    {
      id: 2,
      icon: <User className="w-5 h-5 text-[#1C1C1C]" />,
      text: "New user registered",
      time: "59 minutes ago"
    },
    {
      id: 3,
      icon: <Bug className="w-5 h-5 text-[#1C1C1C]" />,
      text: "You have a bug that needs...",
      time: "12 hours ago"
    },
    {
      id: 4,
      icon: <Radio className="w-5 h-5 text-[#1C1C1C]" />,
      text: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM"
    }
  ];

  const activities = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      text: "You have a bug that needs...",
      time: "Just now"
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      text: "Released a new version",
      time: "59 minutes ago"
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      text: "Submitted a bug",
      time: "12 hours ago"
    },
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      text: "Modified A data in Page X",
      time: "Today, 11:59 AM"
    },
    {
      id: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
      text: "Deleted a page in Project X",
      time: "Feb 2, 2023"
    }
  ];

  const contacts = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      name: "Natali Craig"
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      name: "Drew Cano"
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      name: "Orlando Diggs"
    },
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      name: "Andi Lane"
    }
  ];

  return (
    <div className="h-screen w-[280px] overflow-y-auto border-l bg-[#ffffff] dark:bg-[#1c1c1c] border-[#e8e8e8] dark:border-[#333333] ">

      <div className="p-6">
        <h2 className="text-sm font-semibold mb-5 text-[#1c1c1c] dark:text-[#fff]">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-3">
              <div className="mt-1 odd:bg-[#e3f5ff] dark:[#1c1c1c] p-1 rounded-[8px]">
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal truncate">
                  {notification.text}
                </p>
                <p className="text-sm text-[#9ca3af] mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <h2 className="text-sm font-semibold mb-5 text-[#1c1c1c] dark:text-[#fff]">Activities</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <img
                src={activity.avatar}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal truncate">
                  {activity.text}
                </p>
                <p className="text-sm text-[#9ca3af] mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <h2 className="text-sm font-semibold mb-5 text-[#1c1c1c] dark:text-[#fff]">Contacts</h2>
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center gap-3">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                {contact.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
