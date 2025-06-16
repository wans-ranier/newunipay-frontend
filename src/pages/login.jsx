import { useState } from 'react';
import { Section } from "@/components/Section";
import '@/assets/css/loginStyles.css';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const changeValues = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Implementar a lógica de autenticação aqui
        console.log(formData);
        alert('Login realizado com sucesso!');
        navigate('/dashboard'); // redireciona pra home
    };
    return (
        <Section className="login-section">
            <div className='login-about'>
                <h1>UniPay</h1>
                <h2 className="login-title">Realizar o Login</h2>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form-group">
                    <label className="login-label">Email</label>
                    <input
                        className="login-input"
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={changeValues}
                        required
                    />
                </div>
                <div className="login-form-group">
                    <label className="login-label">Senha</label>
                    <input
                        className="login-input"
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={changeValues}
                        required
                    />
                </div>
                <button className="login-submit-btn" type="submit">
                    Logar
                </button>
                <div className='login-or-cadastro'>
                    <p>Ainda não possui uma conta? <Link className='login-or-cadastro-text' to={"/cadastro"}>Cadastre-se</Link></p>
                </div>
            </form>
        </Section>
    );
};

