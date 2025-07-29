'use client'
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import { toast } from "react-toastify";

const DepositeFund = () => {

    const [showDebitModal, setCShowDebitModal] = useState(false);
    
    const handleDepostBtn = async e => {
        e.preventDefault()
        const form = e.target;
        const transName = form.transName.value;
        const amount = form.amount.value;
        const password = form.password.value;
        // console.log({amount, transName});
        // setCShowDebitModal(false)
        const now = new Date()
        const createdAt = now
        const category = "debited"
        const postData = { transName, amount, category, createdAt }
        console.log(postData);
        if (password == 19524) {
            try {
                const response = await fetch("/api/postTransactionDetails", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                });

                const result = await response.json();
                setCShowDebitModal(false)
                toast.success("successfully debited money!")


            } catch (err) {
                toast.error("Something went wrong, try again later!")
            }
        }else{
            toast.error("You are not authorised to proceed further, input correct password!!")
        }
    }
    return (
        <div>
            <div onClick={() => setCShowDebitModal(true)} className="bg-yellow-500 hover:bg-yellow-600 transition-all h-[150px] p-5 rounded-lg my-5 flex cursor-pointer justify-center items-center">
                <h1 className="text-white text-2xl font-semibold">Deposit Fund</h1>
            </div>
            <CustomModal bgColor={"yellow-500"} show={showDebitModal} onClose={() => setCShowDebitModal(true)}>
                <div>
                    <h1 className="text-lg font-semibold">Wanna spend money? Record here...</h1>
                </div>
                <form onSubmit={handleDepostBtn} className="mt-5">
                    <div>
                        <h1 className="text-yellow-500">Input where you want to spend:</h1>
                        <input name="transName" className="p-2 w-full border-yellow-500 border-b-2 rounded-lg transition-all focus:outline-dotted focus:text-xl" required placeholder="filling the field is required" />
                    </div>
                    <div className="my-5">
                        <h1 className="text-yellow-500">Input amount you want to spend:</h1>
                        <input name="amount" type="number" className="p-2 w-full border-yellow-500 border-b-2 rounded-lg transition-all focus:outline-dotted focus:text-xl" required placeholder="input amount" />
                    </div>
                    <div className="my-5">
                        <h1 className="text-yellow-500">Input Password:</h1>
                        <input name="password" type="password" className="p-2 w-full border-yellow-500 border-b-2 rounded-lg transition-all focus:outline-dotted focus:text-xl" required placeholder="input password" />
                    </div>
                    <div className="flex gap-5">
                        <button type="submit"
                            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-slate-600"
                        >
                            Deposit now
                        </button>
                        <button
                            className="mt-4 px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
                            onClick={() => setCShowDebitModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </CustomModal>
        </div>
    );
};

export default DepositeFund;