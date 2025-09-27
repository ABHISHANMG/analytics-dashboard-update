# Analytics Dashboard

A modern, responsive analytics dashboard built with React and TypeScript, featuring comprehensive data visualization, order management, and real-time notifications.

## Live Demo

The application is deployed on Vercel and can be accessed at: Home page: `https://analytics-dashboard-delta-eight.vercel.app/`, order page: `https://analytics-dashboard-delta-eight.vercel.app/order`

## Tech Stack

### Frontend Framework
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.1.6** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Lucide React 0.544.0** - Beautiful icon library
- **Custom CSS** - Additional styling for specific components

### Data Visualization
- **Recharts 3.2.1** - Composable charting library for React
- **React SVG Worldmap 2.0.0** - Interactive world map component

### Routing & State Management
- **React Router DOM 7.9.1** - Client-side routing
- **Custom Hooks** - Theme management and state handling

### Development Tools
- **ESLint 9.35.0** - Code linting and quality assurance
- **TypeScript ESLint 8.43.0** - TypeScript-specific linting rules
- **Vite Plugin React 5.0.2** - React support for Vite

## Key Dependencies

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.13",
    "lucide-react": "^0.544.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.1",
    "react-svg-worldmap": "^2.0.0-alpha.16",
    "recharts": "^3.2.1",
    "tailwindcss": "^4.1.13"
  }
}
```

## Features

### Dashboard Overview
- **eCommerce Metrics** - Key performance indicators with trend indicators
- **Revenue Charts** - Interactive line charts comparing current vs previous periods
- **Projections vs Actuals** - Bar chart visualization for business forecasting
- **Total Sales** - Donut chart with sales breakdown by channel
- **World Map** - Geographic revenue distribution visualization
- **Top Selling Products** - Data table with product performance metrics

### Order Management
- **Order List** - Comprehensive order management interface
- **Search & Filter** - Advanced search and filtering capabilities
- **Pagination** - Efficient data pagination for large datasets
- **Status Tracking** - Visual status indicators for order states
- **Bulk Actions** - Select multiple orders for batch operations

### User Interface
- **Dark/Light Theme** - Toggle between dark and light modes
- **Responsive Design** - Mobile-first responsive layout
- **Side Navigation** - Collapsible sidebar with organized menu structure
- **Header Controls** - Search, notifications, and theme toggle
- **Notification Panel** - Real-time notifications and activity feed

### Technical Features
- **TypeScript** - Full type safety throughout the application
- **Component Architecture** - Modular, reusable React components
- **Custom Hooks** - Theme management and state handling
- **Responsive Charts** - Mobile-friendly data visualizations
- **Accessibility** - ARIA labels and keyboard navigation support

## Project Structure

```
src/
├── components/
│   ├── graphs/
│   │   ├── barChart.tsx          # Projections vs Actuals chart
│   │   ├── DonutChart.tsx        # Sales breakdown chart
│   │   ├── ecommerceMetrics.tsx  # KPI metrics cards
│   │   ├── revenueChart.tsx      # Revenue line chart
│   │   └── worldmapChart.tsx     # Geographic revenue map
│   ├── icons/                    # Custom SVG icon components
│   ├── table/
│   │   └── index.tsx             # Top selling products table
│   ├── header.tsx                # Main header component
│   ├── sideNavigationBar.tsx     # Sidebar navigation
│   ├── notificationPanel.tsx     # Notifications sidebar
│   ├── orderList.tsx             # Order management table
│   └── hooks/
│       └── index.tsx             # Custom theme hook
├── pages/
│   └── order.tsx                 # Order management page
├── assets/                       # Static assets
├── App.tsx                       # Main application component
├── main.tsx                      # Application entry point
└── index.css                     # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd analytics-dashboard-update/dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Deployment

### Vercel Deployment
The application is configured for Vercel deployment with:
- **vercel.json** - Deployment configuration
- **SPA Routing** - Client-side routing support
- **Build Optimization** - Optimized production builds

### Deployment Steps
1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Environment Variables
No environment variables are required for basic functionality.

## Customization

### Theme Customization
- Modify `src/components/hooks/index.tsx` for theme logic
- Update Tailwind classes in components for styling changes
- Customize colors in `tailwind.config.js`

### Data Integration
- Replace mock data in chart components with real API calls
- Update data structures in table components
- Implement real-time data updates

### Styling
- Modify `src/index.css` for global styles
- Update component-specific Tailwind classes
- Customize chart colors and styling in Recharts components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Acknowledgments

- [Recharts](https://recharts.org/) for chart components
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for fast development experience
