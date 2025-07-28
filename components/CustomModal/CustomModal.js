const CustomModal = ({ show, onClose, bgColor, children }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`bg-white p-6 border-t-[30px] border-${bgColor} rounded-lg shadow-lg w-full max-w-md relative m-5`}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;