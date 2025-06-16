import api from './index'

export  async function getWallets() {
    try{
        const res = await api.get('/wallet');
        return res.data;
    }catch (error){
        console.error('Erro ao buscar carteiras: ', error);
        throw error;
    }
} 


export async function getWalletByID(id) {
    try {
        const res = await api.get(`/wallet/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar carteira pelo id: ', error);
        throw error;
    }
}

export async function createWallet(walletData) {
    try {
        const res = await api.post('/wallet' , walletData);
        return res.data;
    } catch (error) {
        console.error('Erro ao criar carteira: ', error);
        throw error;
    }
}

