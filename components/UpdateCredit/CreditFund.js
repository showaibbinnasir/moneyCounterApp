'use client'
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import { toast } from "react-toastify";

const CreditFund = () => {
    const [showCreditModal, setCShowCreditModal] = useState(false);
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
    const handleCreditBtn = async e => {
        e.preventDefault()
        const form = e.target;
        const transName = form.CreditName.value;
        const amount = form.Creditamount.value;
        // console.log({amount, transName});
        // setCShowDebitModal(false)
        const now = new Date()
        const createdAt = now
        const category = "credited"
        const password = form.password.value;
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
                setCShowCreditModal(false)
                toast.success("Successfully added money!")

            } catch (err) {
                setCShowCreditModal(false)
                toast.error("Something went wrong, Please try again later!");
            }
        }else{
            toast.error("You are not authorised to proceed further, input correct password!")
        }
    }
    return (
        <div>
            <div data-aos="flip-right" onClick={() => setCShowCreditModal(true)} className="bg-green-700 hover:bg-green-800 h-[150px] cursor-pointer p-5 rounded-lg my-5 flex justify-center items-center">
                <h1 className="text-white text-2xl font-semibold">Credit Fund</h1>
            </div>
            <CustomModal show={showCreditModal} onClose={() => setCShowCreditModal(true)} bgColor={"green-700"}>
                <div>
                    <h1 className="text-lg font-semibold">Wanna add money? Record here...</h1>
                </div>
                <form onSubmit={handleCreditBtn} className="mt-5">
                    <div>
                        <h1 className="text-green-700">Input where you want to spend:</h1>
                        <input name="CreditName" className="p-2 w-full border-green-700 border-b-2 rounded-lg transition-all focus:outline-none focus:border-yellow-500 focus:text-xl" required placeholder="filling the field is required" />
                    </div>
                    <div className="my-5">
                        <h1 className="text-green-700">Input amount you want to spend:</h1>
                        <input name="Creditamount" type="number" className="p-2 w-full border-green-700 border-b-2 rounded-lg transition-all focus:outline-none focus:text-xl" required placeholder="input amount" />
                    </div>
                    <div className="my-5">
                        <h1 className="text-green-700">Input password:</h1>
                        <input name="password" type="password" className="p-2 w-full border-green-700 border-b-2 rounded-lg transition-all focus:outline-none focus:text-xl" required placeholder="input password" />
                    </div>
                    <div className="flex gap-5">
                        <button
                            className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-slate-600"
                            type="submit"
                        >
                            Credit now
                        </button>
                        <button
                            className="mt-4 px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
                            onClick={() => setCShowCreditModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </CustomModal>
        </div>
    );
};

// showaibPersonalWallet
// AglKHPAzT50qKG6m

export default CreditFund;