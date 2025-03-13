import NavBar from "./NavBar";
import Footer from "./Footer"; // Simplified import path

const DefaultLayout = ({ children }) => { // Changed to arrow function
    return (
        <div className="bg-[#fff] dark:bg-[#282828] min-h-[100vh]">
            <NavBar />
            <div className="flex mt-[32px] mobile:mt-[16px] pl-[16px] pr-[32px] mobile:pr-[16px] gap-[32px]">
                <div className="flex-1">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;