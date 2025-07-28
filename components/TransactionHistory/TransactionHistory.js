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
                                    <h1 className="text-slate-600 text-sm">{item?.createdAt}</h1>
                                </div>
                            </div>)
                        }
                    </div>
            }

        </div>
    );
};

export default TransactionHistory;