import '@/assets/css/dashbordStyles.css';
import { LogOut } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='dashboard-header'>
        <h1>UniPay</h1>
        <div className="dashboard-menu">
          <nav className="dashboard-menu-nav">
            <ul className="dashboard-menu-list">
              <li className="dashboard-menu-item">Dashboard</li>
              <li className="dashboard-menu-item">Configurações</li>
            </ul>
          </nav>
          <div className="dashboard-logout">
            <button className="dashboard-logout-btn"><LogOut height={"20px"} width={"20px"} />Logout</button>
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-cards">
          {/* Cards content */}
        </div>
      </div>
      <div className="dashboard-transactions-section">
        <div className="dashboard-transactions">
          {/* Transactions content */}
        </div>
      </div>
    </div>
  );
}
