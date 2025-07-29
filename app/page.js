import TransactionHistory from "@/components/TransactionHistory/TransactionHistory";
import UpdateCredit from "@/components/UpdateCredit/UpdateCredit";
import UpdateDateAndTime from "@/components/UpdateDateAndTime/UpdateDateAndTime";
import {getTotalCreditedAmount, getTotalDebitedAmount } from "@/components/util/getTotalCreditedAmount";


export default async function Home() {
  const totalCredited = await getTotalCreditedAmount()
  const totalDebited = await getTotalDebitedAmount()
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1 className="text-white text-xl">Hello, <span className="text-yellow-500">Showaib bin Nasir</span></h1>
        <UpdateDateAndTime/>
        <h1 className="text-white text-lg">You have expended <span className="text-green-500">{totalDebited} </span>Taka today</h1>
        <div className="mt-5 pr-5">
          <h1 className="text-white text-xl font-semibold">Todays History</h1>
          <div className="grid grid-cols-2 mt-2 gap-5">
            <div data-aos="flip-right" className=" bg-green-700 flex flex-col justify-center items-center h-[150px] p-5 rounded-lg">
                <h1 className="text-white text-2xl font-semibold">{totalCredited}/=</h1>
                <h1 className="text-white">Credited</h1>

            </div>
            <div data-aos="flip-left" className=" bg-yellow-500 flex flex-col justify-center items-center h-[150px] p-5 rounded-lg">
                <h1 className="text-white text-2xl font-semibold">{totalDebited}/=</h1>
                <h1 className="text-white">Debited</h1>
            </div>
          </div>
          <div>
            <UpdateCredit/>
          </div>

        </div>
      </div>
      <div>
        <h1 className="text-xl text-white" >Transaction History (Today)</h1>
        <div className="mt-2 bg-yellow-500 h-[585px] overflow-y-scroll rounded-lg p-5">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
