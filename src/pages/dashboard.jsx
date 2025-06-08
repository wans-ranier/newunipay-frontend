import React from "react";
export const Dashboard = () => {
   
     // Estado para armazenar a lista de usuários retornada pela API
      const [users, setUsers] = useState([]);
    
      // Hook useEffect para carregar os usuários da API quando a página é carregada
      useEffect(() => {
        const fetchUsers = async () => {
          try {
            // Faz uma requisição GET para o endpoint /users do backend
            const response = await axios.get('http://localhost:3000/users');
            setUsers(response.data); // Armazena os usuários no estado
          } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            setUsers([]); // Define uma lista vazia em caso de erro
          }
        };
        fetchUsers(); // Chama a função para buscar usuários
      }, []); // [] garante que a requisição só é feita uma vez, ao carregar a página
    
    return (
        <React.Fragment>
            <Content>
               <div>
                     {/* Conteúdo principal da página */}
                     <Container className="my-5">
                       {/* Título centralizado */}
                       <h1 className="text-center mb-4">Bem-vindo ao Sistema de Gerenciamento</h1>
                       {/* Descrição geral do sistema */}
                       <p className="text-center">
                         Este sistema permite gerenciar usuários e suas informações. Use o menu acima para
                         navegar pelas funcionalidades de Perfil, Carteira Digital e Dashboard.
                       </p>
               
                       {/* Lista de usuários cadastrados */}
                       <h3 className="mt-4">Usuários Cadastrados</h3>
                       <div className="row">
                         {users.length > 0 ? (
                           // Exibe cada usuário em um cartão Bootstrap
                           users.map((user, index) => (
                             <div className="col-md-4 mb-3" key={index}>
                               <Card>
                                 <Card.Body>
                                   <Card.Title>{user.name}</Card.Title>
                                   <Card.Text>Senha: {user.senha}</Card.Text>
                                 </Card.Body>
                               </Card>
                             </div>
                           ))
                         ) : (
                           // Mensagem caso não haja usuários
                           <p>Nenhum usuário encontrado.</p>
                         )}
                       </div>
                     </Container>
                   </div>
            </Content>
        </React.Fragment>
    );
}