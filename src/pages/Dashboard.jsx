import '@/assets/css/dashbordStyles.css';
import { LayoutDashboard, LogOut, UserRoundCog } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='dashboard-header'>
        <h1>UniPay</h1>
        <div className="dashboard-menu">
          <nav className="dashboard-menu-nav">
            <ul className="dashboard-menu-list">
              <Link to={"/dashboard"} className="dashboard-menu-item"><LayoutDashboard height={"18px"} width={"18px"} />Dashboard</Link>
              <Link to={"/dashboard/profile"} className="dashboard-menu-item"><UserRoundCog height={"18px"} width={"18px"} />Configurações</Link>
            </ul>
          </nav>
          <div className="dashboard-logout">
            <button className="dashboard-logout-btn"><LogOut height={"18px"} width={"18px"} />Logout</button>
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className='card card_saldo'>
            <p>Saldo Total</p>
            <p>R$ <span>00,00</span></p>
          </div>
          <div className='card card_operations'>
              <p>Transferir</p>
          </div>
          <div className='card card_operations'>
              <p>Depositar</p>
          </div>
          <div className='card card_operations'>
              <p>Sacar</p>
          </div>
        </div>
      </div>
      <div className="dashboard-transactions-section">
        <div className="dashboard-transactions">
          <h3>Transactions</h3>
        </div>
      </div>
    </div>
  );
}
