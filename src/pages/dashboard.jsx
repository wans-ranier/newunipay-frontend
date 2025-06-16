import React, { useState, useEffect } from "react";
import axios from "axios";
import '@/assets/css/dashbordStyles.css';
import { Section } from '../components/Section';

export const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        setUsers([]);
      }
    };
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      <main>

        <div className="blocosDash" id="MyMenu">
          <ul>
            <button>Transferir</button>
            <button>Depositar</button>
            <button>Sacar</button>
            <button>Settings</button>
          </ul>
        </div>

        <div className="blocosDash" id="painelgeral">
          <div className="topo">
            <h1>Bem-vindo ao Sistema de Gerenciamento</h1>
            <p>
              Este sistema permite gerenciar usuários e suas informações. Use o menu acima para
              navegar pelas funcionalidades de Perfil, Carteira Digital e Dashboard.
            </p>

          </div>

          <div className="saldo blocos">
            <h2>Saldo Atual</h2>
            <p>R$ 1.000,00</p>
            <button>Adicionar Saldo</button>
          </div>

<div className="blocos">
  <h2>Gastos</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Doloribus, cumque. Quod, asperiores. Doloremque, voluptatibus. Quisquam, voluptatum. Doloribus, cumque. Quod, asperiores. Doloremque, voluptatibus.</p>

</div>

          <div className="blocos">
            <h2>Estatisticas</h2>
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo animi! Voluptate error, molestiae, unde quisquam earum natus, id eum quas ipsa necessitatibus ex quibusdam. Sit ad velit commodi sed?</p>
          
          </div>
        </div>

        <div id="usuarios" className="blocosDash">
          <h3>Usuários Cadastrados</h3>
          <div>
            {users.length > 0 ? (
              users.map((user, index) => (
                <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                  <strong>{user.name}</strong>
                  <div>Senha: {user.senha}</div>
                </div>
              ))
            ) : (
              <p>Nenhum usuário encontrado.</p>
            )}
          </div>
        </div>


        <div className="blocosDash" id="Transacoes">
          <h3>Transações Recentes</h3>
          <ul>
            <li>Transação 1</li>
            <li>Transação 2</li>
            <li>Transação 3</li>
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
}