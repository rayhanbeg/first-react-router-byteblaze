import { DotLoader} from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <DotLoader  color='#F92FD3' />
        </div>
    );
};

export default Loader;