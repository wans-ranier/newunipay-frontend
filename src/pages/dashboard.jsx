import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Content } from '../styles';
import { Card, Container } from 'react-bootstrap'; // Garante que os componentes do Bootstrap sejam usados

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
      <Content>
        <Container className="my-5">
          <h1 className="text-center mb-4">Bem-vindo ao Sistema de Gerenciamento</h1>
          <p className="text-center">
            Este sistema permite gerenciar usuários e suas informações. Use o menu acima para
            navegar pelas funcionalidades de Perfil, Carteira Digital e Dashboard.
          </p>

          <h3 className="mt-4 text-center">Usuários Cadastrados</h3>
          <div className="row justify-content-center">
            {users.length > 0 ? (
              users.map((user, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <Card style={{ backgroundColor: '#E9DFC3', borderColor: '#1B56FD' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#0118D8' }}>{user.name}</Card.Title>
                      <Card.Text>Senha: {user.senha}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-center">Nenhum usuário encontrado.</p>
            )}
          </div>
        </Container>
      </Content>
    </React.Fragment>
  );
};
