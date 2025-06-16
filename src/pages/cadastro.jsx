import { useState } from 'react';
import { Section } from "@/components/Section";
import '@/assets/css/cadastroStyles.css'
import { Link, useNavigate } from 'react-router-dom';

export const Cadastro = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        birth_date: new Date().toISOString().split('T')[0],
        password: ""
    })

    const changeValues = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementar a lógica de persistência do db.
        console.log(formData)
        alert('Cadastro realizado com sucesso!');
        navigate('/login')
    };
    return (
        <Section className="cadastro-section">
            <div className='cadastro-about'>
                <h1>UniPay</h1>
                <h2 className="cadastro-title">Cadastro de Usuário</h2>
            </div>
            <form className="cadastro-form" onSubmit={handleSubmit}>
                <div className="cadastro-form-group">
                    <label className="cadastro-label">Nome</label>
                    <input
                        className="cadastro-input"
                        type="text"
                        value={formData.name}
                        name='name'
                        onChange={changeValues}
                        required
                    />
                </div>
                <div className="cadastro-form-group">
                    <label className="cadastro-label">Sobrenome</label>
                    <input
                        className="cadastro-input"
                        type="text"
                        name='surname'
                        value={formData.surname}
                        onChange={changeValues}
                        required
                    />
                </div>
                <div className="cadastro-form-group">
                    <label className="cadastro-label">Email</label>
                    <input
                        className="cadastro-input"
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={changeValues}
                        required
                    />
                </div>
                <div className="cadastro-form-group">
                    <label className="cadastro-label">Data de anivesário</label>
                    <input
                        className="cadastro-input"
                        type="date"
                        name='birth_date'
                        value={formData.birth_date}
                        onChange={changeValues}
                        required
                    />
                </div>
                <div className="cadastro-form-group">
                    <label className="cadastro-label">Senha</label>
                    <input
                        className="cadastro-input"
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={changeValues}
                        required
                    />
                </div>
                <button className="cadastro-submit-btn" type="submit">Cadastrar</button>
                <div className='cadastro-or-login'>
                    <p>Já possui uma conta? <Link className='cadastro-or-login-text' to={"/login"}>Logar-se</Link></p>
                </div>
            </form>
        </Section>
    );
};