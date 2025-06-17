import { Link, useNavigate } from 'react-router-dom'
import { LayoutDashboard, LogOut, UserRoundCog } from 'lucide-react';
import '@/assets/css/dashboardHeaderStyles.css'
import { logoutUser } from '../services/userService';

export const DashboardHeader = () => {
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logoutUser();
            // redireciona para o login.
            navigate('/login');
        } catch (error) {
            console.error('Erro ao fazer logout!', error);
        }
    }

    return (
        <>
            <div className='dashboard-header'>
                <h1 className='dashboard-header-title'>UniPay</h1>
                <div className="dashboard-menu">
                    <nav className="dashboard-menu-nav">
                        <ul className="dashboard-menu-list">
                            <Link to={"/dashboard"} className="dashboard-menu-item"><LayoutDashboard height={"18px"} width={"18px"} />Dashboard</Link>
                            <Link to={"/dashboard/perfil"} className="dashboard-menu-item"><UserRoundCog height={"18px"} width={"18px"} />Perfil</Link>
                        </ul>
                    </nav>
                    <div className="dashboard-logout">
                        <button onClick={handleLogout} className="dashboard-logout-btn"><LogOut height={"18px"} width={"18px"} />Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
