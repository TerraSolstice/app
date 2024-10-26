import React from 'react';
import { Link } from 'react-router-dom';

interface ApplicationsLayoutProps {
  children: React.ReactNode;
}

const ApplicationsLayout: React.FC<ApplicationsLayoutProps> = ({ children }) => {
  return (
    <div className="applications-layout">
      <header className="applications-header">
        <h1>Applications Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/applications/overview">Overview</Link></li>
            <li><Link to="/applications/manage">Manage Applications</Link></li>
            <li><Link to="/applications/settings">Settings</Link></li>
          </ul>
        </nav>
      </header>
      <main className="applications-content">
        {children}
      </main>
      <footer className="applications-footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default ApplicationsLayout;