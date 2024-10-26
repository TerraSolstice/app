import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard/overview">Overview</Link></li>
            <li><Link to="/dashboard/analytics">Analytics</Link></li>
            <li><Link to="/dashboard/reports">Reports</Link></li>
          </ul>
        </nav>
      </header>
      <main className="dashboard-content">
        {children}
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;