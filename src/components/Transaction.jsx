import '@/assets/css/transactionStyles.css'
import { ArrowLeftRight, BanknoteArrowDown, BanknoteArrowUp, CircleDollarSign } from "lucide-react";

// Mapeando o nome do tipo pra um ícone que vem da API
const iconMap = {
    transfer: <ArrowLeftRight size={20} />,
    deposit: <BanknoteArrowUp size={20} />,
    withdrawal: <BanknoteArrowDown size={20} />,
};

const nameMap = {
    transfer: "Transferência",
    deposit: "Depósito",
    withdrawal: "Saque",
}

export const Transaction = ({ type, amount, id }) => {
    const typeInToLowerCase = type.toLowerCase();
    const icon = iconMap[typeInToLowerCase];
    const transferName = nameMap[typeInToLowerCase]
    return (
        <div className="transaction">
            <div className='transaction-content'>
                <div className="transaction-icon">{icon}</div>
                <div className="transaction-info">
                    <div className="transaction-info-type">{transferName}</div>
                    <div className="transaction-info-id">{id}</div>
                </div>
            </div>
            <div className="transaction-amount">
                <p>{typeInToLowerCase === "withdrawal" ? "-" : "+"}{amount}<CircleDollarSign size={16} /></p>
            </div>
        </div>
    )
}

