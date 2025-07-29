import AllTimeHistory from "@/components/AllTimeHistory/AllTimeHistory";

const totalmoney = () => {
    return (
        <div>
            <h1 className="text-white text-center text-2xl ">Transaction History (All time)</h1>
            <div className="mt-2 bg-yellow-500 h-[800px] overflow-y-scroll rounded-lg p-5">
                <AllTimeHistory/>
            </div>
        </div>
    );
};

export default totalmoney;