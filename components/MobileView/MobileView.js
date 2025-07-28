import TransactionHistory from "../TransactionHistory/TransactionHistory";
import CreditFund from "../UpdateCredit/CreditFund";
import DepositeFund from "../UpdateCredit/DepositeFund";

const MobileView = () => {
    return (
        <div>
            <div className="block lg:hidden">
                <h1 className="text-lg text-center text-white mt-5">All the features avaialble on Desktop mode.</h1>
                <div className=" mt-5">
                    <h1 className="text-white text-xl text-center">Hello, <span className="text-yellow-500">Showaib bin Nasir</span></h1>
                    <h1 className="text-white text-lg text-center">You have expended <span className="text-red-500">450/=</span></h1>
                    <h1 className="text-white text-lg text-center">You should have <span className="text-green-500">300/=</span> on your wallet</h1>
                    <div className="p-5">
                        <DepositeFund />
                        <CreditFund />
                    </div>
                    <div className="p-5">
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