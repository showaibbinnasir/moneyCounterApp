'use client'
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";

const DepositeFund = () => {

    const [showDebitModal, setCShowDebitModal] = useState(false);
    function formatCustomDate(date) {
        const day = date.getDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        const hours24 = date.getHours();
        const hours = hours24 % 12 || 12; // Convert to 12-hour format
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours24 >= 12 ? 'PM' : 'AM';

        // Add ordinal suffix to day (e.g., 1st, 2nd, 3rd)
        const getOrdinal = (n) => {
            if (n > 3 && n < 21) return 'th';
            switch (n % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${day}${getOrdinal(day)} ${month}, ${year} ${hours}:${minutes}${ampm}`;
    }
    const handleDepostBtn = async e => {
        e.preventDefault()
        const form = e.target;
        const transName = form.transName.value;
        const amount = form.amount.value;
        // console.log({amount, transName});
        // setCShowDebitModal(false)
        const now = new Date()
        const createdAt = formatCustomDate(now)
        const category = "debited"
        const postData = { transName, amount, category, createdAt }
        console.log(postData);
        try {
            const response = await fetch("/api/postTransactionDetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });

            const result = await response.json();
            console.log(result);

        } catch(err) {
            console.log(err.message);
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