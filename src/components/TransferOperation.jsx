import { ArrowLeftRight, AtSign, CircleDollarSign, XCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import { transferTrasaction } from "../services/transactionService";
import { getUserByEmail } from "../services/userService";
import { getWalletByID } from "../services/walletService";

export const TransferOperation = () => {
    const dialogRef = useRef(null);

    const initialFormDataState = {
        amount: 0,
        email: ""
    }

    const [formData, setFormData] = useState(initialFormDataState);

    const changeValues = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await getUserByEmail(formData.email);
            const { wallet } = await getWalletByID(user?.id);
            const transferData = {
                amount: formData.amount,
                wallet_recipient_id: wallet?.id
            }

            const newTransactionTransfer = await transferTrasaction(transferData);

            alert(newTransactionTransfer.message);
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    return (
        <>
            {/* Botão pra abrir o modal */}
            <button
                className="btn-operation"
                onClick={() => dialogRef.current?.showModal()}
            >
                <div className='btn-operation-icon'>
                    <ArrowLeftRight width={"20px"} height={"20px"} />
                </div>
                <p>Transferir</p>
            </button>

            {/* Dialog (Modal nativo) */}
            <dialog ref={dialogRef} className="operation-modal">
                <div className="operation-modal-header">
                    <h2>Transferência</h2>
                    <button className="operation-modal-close" onClick={() => dialogRef.current?.close()}>
                        <p>Fechar</p><XCircle size={20} />
                    </button>
                </div>
                <div>
                    <form className="operation-modal-form" onSubmit={handleSubmit}>
                        <div className="operation-modal-form-field">
                            <label htmlFor=""><AtSign size={20} /> Email de destino</label>
                            <input type="text" value={formData.email} onChange={changeValues} placeholder="example@gmail.com" name="email" id="" />
                        </div>
                        <div className="operation-modal-form-field">
                            <label htmlFor=""><CircleDollarSign size={20} />Valor</label>
                            <input type="number" value={formData.amount} onChange={changeValues} placeholder="0.00" name="amount" id="" />
                        </div>
                        <button className="operation-modal-form-btn">Realizar transferência</button>
                    </form>
                </div>
            </dialog>
        </>
    )
};

