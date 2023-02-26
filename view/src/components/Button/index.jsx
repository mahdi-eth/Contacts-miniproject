import { Spinner } from "components";

export const Button = ({ children, loading, ...props }) => {
    return (
        <button
            {...props}
            type="submit"
            className="text-white flex items-center justify-center bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center">
            {loading ? <Spinner /> : null}
            {children}
        </button>
    );
};
