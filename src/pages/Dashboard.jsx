import '@/assets/css/dashbordStyles.css';
import { Banknote, PiggyBank, Wallet } from 'lucide-react';
import { TransferOperation } from '@/components/TransferOperation';
import { WithdrawalOperation } from '@/components/WithdrawalOperation';
import { DepositOperation } from '@/components/DepositOperation';
import { Transaction } from '@/components/Transaction';
import { useEffect, useState } from 'react';
import { getWalletByUserID } from '../services/walletService';
import { getUser } from '../services/userService';
import { getAllTransactionsByWalletID } from '../services/transactionService';

export const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState("");

  // Busca o usuário
  useEffect(() => {
    (async () => {
      try {
        const { user } = await getUser();
        setUser(user);
      } catch (error) {
        setError(error?.response?.data?.message);
      }
    })();
  }, []);

  // Busca a carteira depois que o usuário já existe!!!
  useEffect(() => {
    if (user?.id) {
      (async () => {
        try {
          const { wallet } = await getWalletByUserID();
          setWallet(wallet);
        } catch (error) {
          setError(error?.response?.data?.message);
        }
      })();
    }
  }, [user]);


  // Busca as transações depois que a carteira já existe!!!
  useEffect(() => {
    if (wallet?.id) {
      (async () => {
        try {
          const { transactions } = await getAllTransactionsByWalletID(wallet.id);
          setTransactions(transactions);
        } catch (error) {
          setError(error?.response?.data?.message);
        }
      })();
    }
  }, [wallet]);


  return (
    <section className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className='dashboard-cards-header'>
            <div className='dashboard-cards-header-title'>
              <p>Olá, <span>{user?.name} {user?.surname}</span>.</p>
            </div>
            <div className='dashboard-card card-amount'>
              <div>
                <p><PiggyBank width={"20px"} height={"20px"} />Saldo Total</p>
                <p className='dashboard-card-amount-value'><Banknote width={"20px"} height={"20px"} /><span>{wallet?.amount || "00,00"}</span> R$</p>
              </div>
              <div className='dashboard-card-amount-keys'>
                <p><Wallet width={"20px"} height={"20px"} />Chaves da Carteira</p>
                <span>ID: {wallet?.id}</span>
                <span>Email: {user?.email}</span>
              </div>
            </div>
          </div>
          <div className='dashboard-card-operations'>
            <TransferOperation/>
            <DepositOperation />
            <WithdrawalOperation />
          </div>
        </div>
      </div>
      <div className="dashboard-transactions-container">
        <div className="dashboard-transactions">
          <div className='dashboard-transactions-title'>
            <h3>Transactions</h3>
          </div>
          <div className='dashboard-transactions-list'>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <Transaction key={transaction.id} {...transaction} />
              ))
            ) : (
              <p>{error}</p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
