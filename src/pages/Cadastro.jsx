import { useState } from 'react';
import { Section } from "@/components/Section";
import '@/assets/css/cadastroStyles.css'
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/userService';
import { createWallet } from '../services/walletService';

export const Cadastro = () => {
    const navigate = useNavigate();

    const initialFormDataState = {
        name: "",
        surname: "",
        email: "",
        birth_date: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialFormDataState)

    const changeValues = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Criando um novo usuário
            const newUser = await createUser(formData);
            // Criando a Carteira em sequência com os dados retornado do novo usuário.
            await createWallet({
                user_id: newUser.user.id
            });

            alert(newUser.message);
            navigate('/login')
        } catch (error) {
            alert(error.response?.data?.message);
            setFormData(initialFormDataState)
        }
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
                        placeholder='João'
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
                        placeholder='Rodrigues'
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
                        placeholder='exemplo@gmail.com'
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
                        min="1900-1-1"
                        max="2022-12-31"
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
                        placeholder='@unipay!'
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
