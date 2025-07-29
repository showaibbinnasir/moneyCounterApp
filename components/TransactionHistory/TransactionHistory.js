'use client'
import { useEffect, useState } from "react";

const TransactionHistory = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState("")
    useEffect(() => {
        setIsLoading(true)
        fetch('api/getTransactionDetails')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setData(data)
            }).catch(err => {
                setIsLoading(false)
                alert(err.message)
            })
    }, [])
    function formatCustomDate(datestr) {
        const date = new Date(datestr)
        const day = date.getDate();
        console.log(day);
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
    // console.log(data);
    if (!data) return <p>Loading...</p>;
    return (
        <div>
            {
                isLoading ?
                    <h1>Loading...</h1> :
                    <div>
                        {
                            data?.map((item, i) => <div key={i}>
                                <div className="p-2 border-b-2 border-green-800">
                                    <h1 className="text-green-800 font-semibold text-xl">{item?.transName}</h1>
                                    <h1 className="text-white">{item?.amount}/=</h1>
                                    <h1 className="text-slate-600 text-sm">{formatCustomDate(item?.createdAt)}</h1>
                                </div>
                            </div>)
                        }
                    </div>
            }

        </div>
    );
};

export default TransactionHistory;