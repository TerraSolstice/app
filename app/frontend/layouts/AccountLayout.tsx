import React from 'react';
import { Link } from 'react-router-dom';

interface AccountLayoutProps {
  children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div className="account-layout">
      <header className="account-header">
        <h1>Account Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/account/profile">Profile</Link></li>
            <li><Link to="/account/settings">Settings</Link></li>
            <li><Link to="/account/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
      <main className="account-content">
        {children}
      </main>
      <footer className="account-footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default AccountLayout;