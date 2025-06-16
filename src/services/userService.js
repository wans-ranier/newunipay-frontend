import api from './index'

export  async function getUsers() {
    try{
        const res = await api.get('/users');
        return res.data;
    }catch (error){
        console.error('Erro ao buscar usuários: ', error);
        throw error;
    }
} 


export async function getUserByID(id) {
    try {
        const res = await api.get(`/users/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar usuário pelo id: ', error);
        throw error;
    }
}

export async function getUserByEmail(email) {
    try {
        const res = await api.get(`/users/${email}`);
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar usuários pelo email: ', error);
        throw error;
    }
}

export async function createUser(userData) {
    try {
        const res = await api.post('/users' , userData);
        return res.data;
    } catch (error) {
        console.error('Erro ao criar usuário: ', error);
        throw error;
    }
}

export async function loginUser(credentials) {
    try {
        const res = await api.post('/users/login', credentials);
        return res.data;
    } catch (error) {
        console.error('Erro ao realizar o login : ', error);
        throw error;
    }
}

export async function updateUser(userData) {
    try {
        const res = await api.put('/users/', userData);
        return res.data;
    } catch (error) {
        console.error('Erro ao atualizar usuário: ', error);
        throw error;
    }
}

export async function deleteUser() {
    try {
        const res = await api.delete('/users/');
        return res.data;
    } catch (error) {
        console.error('Erro ao deletar usuário: ', error);
        throw error;
    }
}

