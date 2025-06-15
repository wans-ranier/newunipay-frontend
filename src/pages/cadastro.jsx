import React from 'react';
import { useState } from 'react';

export const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            return;
        }
        setErro('');
        // Aqui você pode adicionar a lógica para enviar os dados do usuário
        alert('Cadastro realizado com sucesso!');
    };
    return (
        <React.Fragment>
            <h1>Cadastro de Usuário</h1>
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
                <div>
                    <label>Confirmar Senha:</label>
                    <input
                        type="password"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                    />
                </div>
                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                <button type="submit">Cadastrar</button>
            </form>
        </React.Fragment>
    );
};