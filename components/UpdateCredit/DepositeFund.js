'use client'
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";

const DepositeFund = () => {

    const [showDebitModal, setCShowDebitModal] = useState(false);
    return (
        <div>
            <div onClick={() => setCShowDebitModal(true)} className="bg-yellow-500 hover:bg-yellow-600 transition-all h-[150px] p-5 rounded-lg my-5 flex cursor-pointer justify-center items-center">
                <h1 className="text-white text-2xl font-semibold">Deposite Fund</h1>
            </div>
            <CustomModal bgColor={"yellow-500"} show={showDebitModal} onClose={() => setCShowDebitModal(true)}>
                <div>
                    <h1 className="text-lg font-semibold">Wanna spend money? Record here...</h1>
                </div>
                <form className="mt-5">
                    <div>
                        <h1 className="text-yellow-500">Input where you want to spend:</h1>
                        <input className="p-2 w-full border-yellow-500 border-b-2 rounded-lg transition-all focus:outline-dotted focus:text-xl" required placeholder="filling the field is required" />
                    </div>
                    <div className="my-5">
                        <h1 className="text-yellow-500">Input amount you want to spend:</h1>
                        <input type="number" className="p-2 w-full border-yellow-500 border-b-2 rounded-lg transition-all focus:outline-dotted focus:text-xl" required placeholder="input amount" />
                    </div>
                    <div className="flex gap-5">
                        <button
                            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-slate-600"
                            onClick={() => setCShowDebitModal(false)}
                        >
                            Deposite now
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