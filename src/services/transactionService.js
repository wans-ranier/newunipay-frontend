import api from './index'

export  async function getAllTransactions() {
    try{
        const res = await api.get('/transaction/');
        return res.data;
    }catch (error){
        console.error('Erro ao buscar todas as transações: ', error);
        throw error;
    }
} 


export async function getTransactionByID(id) {
    try {
        const res = await api.get(`/transaction/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar transação pelo id: ', error);
        throw error;
    }
}

export async function getTransactionByWalletID(id) {
    try {
        const res = await api.get(`/transaction/wallet/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar transação pelo id da carteira : ', error);
        throw error;
    }
}

export async function withDrawalTrasaction(walletData) {
    try {
        const res = await api.post('/transaction/withdrawal' , walletData);
        return res.data;
    } catch (error) {
        console.error('Erro ao realizar : ', error);
        throw error;
    }
}

export async function depositTransaction(value) {
    try {
        const res = await api.post('/transaction/deposit' , value);
        return res.data;
    } catch (error) {
        console.error('Erro ao depositar valor: ', error);
        throw error;
    }
}

export async function transferTrasaction(value) {
    try {
        const res = await api.post('/transaction/transfer' , value);
        return res.data;
    } catch (error) {
        console.error('Erro ao transferir valor: ', error);
        throw error;
    }
}

