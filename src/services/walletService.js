import api from './index'

export  async function getWallets() {
    try{
        const res = await api.get('/wallets');
        return res.data;
    }catch (error){
        console.error('Erro ao buscar carteiras: ', error);
        throw error;
    }
} 


export async function getWalletByID(id) {
    try {
        const res = await api.get(`/wallets/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar carteira pelo id: ', error);
        throw error;
    }
}

export async function createWallet(walletData) {
    try {
        const res = await api.post('/wallets' , walletData);
        return res.data;
    } catch (error) {
        console.error('Erro ao criar carteira: ', error);
        throw error;
    }
}

