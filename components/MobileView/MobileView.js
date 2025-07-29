import TransactionHistory from "../TransactionHistory/TransactionHistory";
import CreditFund from "../UpdateCredit/CreditFund";
import DepositeFund from "../UpdateCredit/DepositeFund";
import UpdateDateAndTime from "../UpdateDateAndTime/UpdateDateAndTime";
import { getTotalCreditedAmount, getTotalDebitedAmount } from "../util/getTotalCreditedAmount";

const MobileView = async() => {
    const totalCredited = await getTotalCreditedAmount()
      const totalDebited = await getTotalDebitedAmount()
    return (
        <div>
            <div className="block lg:hidden">
                <h1 className="text-lg text-center text-white mt-5">All the features avaialble on Desktop mode.</h1>
                <div className=" mt-5">
                    <div className="flex justify-center">
                        <UpdateDateAndTime/>
                    </div>
                    <h1 className="text-white text-xl text-center">Hello, <span className="text-yellow-500">Showaib bin Nasir</span></h1>
                    <h1 className="text-white text-lg text-center">You have expended <span className="text-red-500">{totalDebited}/=</span></h1>
                    <h1 className="text-white text-lg text-center">You should have <span className="text-green-500">{totalCredited - totalDebited}/=</span> on your wallet</h1>
                    <div className="p-5">
                        <DepositeFund />
                        <CreditFund />
                    </div>
                    <div className="p-5">
                        <h1 className="text-xl text-white font-semibold my-2">Transaction History</h1>
                        <div className=" bg-yellow-500 h-[565px] overflow-y-scroll rounded-lg p-5">
                            <TransactionHistory />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MobileView;