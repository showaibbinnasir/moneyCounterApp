'use client'
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";

const DepositeFund = () => {
    const [showCreditModal, setCShowCreditModal] = useState(false);
    return (
        <div>
            <div onClick={() => setCShowCreditModal(true)} className="bg-green-700 h-[150px] p-5 rounded-lg my-5 flex justify-center items-center">
                <h1 className="text-white text-2xl font-semibold">Credit Fund</h1>
            </div>
            <CustomModal show={showCreditModal} onClose={() => setCShowCreditModal(true)}>
                <h2 className="text-xl font-semibold mb-4">Custom Modal</h2>
                <p>This is a simple modal for credit fund</p>
                <button
                    className="mt-4 px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
                    onClick={() => setCShowCreditModal(false)}
                >
                    Close
                </button>
            </CustomModal>
        </div>
    );
};

export default DepositeFund;