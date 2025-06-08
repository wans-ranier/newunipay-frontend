import React from 'react';
import { Content } from '../styles';

export const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');
        setLoading(true);

        // Área reservada para integração com backend
        // Exemplo de requisição (ajuste a URL e método quando o backend estiver pronto)
        /*
        try {
            const response = await fetch('http://localhost:PORTA/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, senha }),
            });
            if (!response.ok) {
                throw new Error('Usuário ou senha inválidos');
            }
            // Aqui você pode tratar o sucesso do login, como salvar token, redirecionar, etc.
            alert('Login realizado com sucesso!');
        } catch (err) {
            setErro(err.message);
        }
        */
        // Remova este bloco abaixo quando conectar ao backend
        setTimeout(() => {
            setLoading(false);
            if (nome === 'admin' && senha === '1234') {
                alert('Login simulado com sucesso!');
            } else {
                setErro('Usuário ou senha inválidos (simulação).');
            }
        }, 1000);
    };

    return (
        <React.Fragment>
            <Content>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    {erro && <p style={{ color: 'red' }}>{erro}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </Content>
        </React.Fragment>
    );
};