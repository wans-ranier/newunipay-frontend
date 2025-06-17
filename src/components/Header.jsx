import '@/assets/css/headerStyles.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <h1>UniPay</h1>
            <nav>
                <ul>
                    <Link to={"/"}>Início</Link>
                    <Link to={"/sobre"}>Sobre</Link>
                    <Link to={"/equipe"}>Equipe</Link>
                </ul>
            </nav>
            <Link to={"/login"}><button>Login</button></Link>
        </header>
    )
}