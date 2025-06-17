import { BanknoteArrowUp, CircleDollarSign, XCircle } from "lucide-react"
import { useRef, useState } from "react";
import { depositTransaction } from "../services/transactionService";

export const DepositOperation = () => {
    const dialogRef = useRef(null);

    const [amount, setAmount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newTransactionDeposit = await depositTransaction(amount);
            alert(newTransactionDeposit.message);
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    return (
        <>
            {/* Botão pra abrir o modal */}
            <button className="btn-operation" onClick={() => dialogRef.current?.showModal()}>
                <div className='btn-operation-icon'>
                    <BanknoteArrowUp width={"20px"} height={"20px"} />
                </div>
                <p>Depositar</p>
            </button>


            {/* Dialog (Modal nativo) */}
            <dialog ref={dialogRef} className="operation-modal">
                <div className="operation-modal-header">
                    <h2>Depósito</h2>
                    <button className="operation-modal-close" onClick={() => dialogRef.current?.close()}>
                        <p>Fechar</p><XCircle size={20} />
                    </button>
                </div>
                <div>
                    <form className="operation-modal-form" onSubmit={handleSubmit} >
                        <div className="operation-modal-form-field">
                            <label htmlFor=""><CircleDollarSign size={20} />Valor</label>
                            <input placeholder="0.00" type="number" value={amount} onChange={(e) => (setAmount(e.target.value))} name="" id="" />
                        </div>
                        <button className="operation-modal-form-btn">Realizar depósito</button>
                    </form>
                </div>
            </dialog>
        </>
    )
};

