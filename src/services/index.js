// Criar o ponto de conexão incial utilizando o Axios.create e depois exportar uma função com o ponto base.
import axios from 'axios';

const app = axios.create({
    baseURL: 'http://localhost:3000/',
});

export default app;