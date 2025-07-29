import { RingLoader } from "react-spinners";

const loading = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex justify-center mt-[150px]"><RingLoader color="#ffffff" size={120} /></div>
        </div>
    );
};

export default loading;