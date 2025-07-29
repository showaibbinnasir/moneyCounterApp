import { RingLoader } from "react-spinners";

const loading = () => {
    return (
        <div className="flex mt-[150px] justify-center items-center">
            <div className=""><RingLoader color="#ffffff" size={120} /></div>
        </div>
    );
};

export default loading;