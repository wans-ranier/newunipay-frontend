import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div>
        <h1>Bem-vindo ao Sistema de Gerenciamento</h1>
        <p>
          Este sistema permite gerenciar usuários e suas informações. Use o menu acima para
          navegar pelas funcionalidades de Perfil, Carteira Digital e Dashboard.
        </p>
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
    </React.Fragment>
  );
}
