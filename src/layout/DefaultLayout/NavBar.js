import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import logo from "../../assets/mangareder.png";
import Context from "../../state/Context";

function NavBar() {
    const { theme, setTheme } = useContext(Context)
    const [searchQuery, setSearchQuery] = useState("")
    const [showMobileSearch, setShowMobileSearch] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            window.location.href = `/search/${searchQuery.trim()}`
            setShowMobileSearch(false)
        }
    }

    return (
        <div className="flex items-center justify-between sticky top-0 left-0 right-0 h-[60px] bg-[#fff] text-[#000] z-[999] lg:px-[32px] md:px-[23px] px-[16px] border-b border-slate-900/10 dark:bg-[#282828] dark:border-[#cccccc5b]">
            <div className="flex gap-[12px] items-center">
                <NavLink className={'flex-shrink-0 w-[40px] h-[40px] rounded-[8px] overflow-hidden'} to='/'>
                    <img src={logo} alt="logo"/>
                </NavLink>
                <NavLink to='/' className="lg:text-2xl mobile:text-xl text-[#10b981] font-[900]">
                    H2 IHutech
                </NavLink>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-[500px] mx-4">
                <form onSubmit={handleSearch} className="flex w-full relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm manga..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-2 px-4 pr-10 rounded-full bg-[#e8ebed] dark:bg-[rgba(204,204,204,0.2)] text-[#000] dark:text-[#fff] focus:outline-none focus:ring-2 focus:ring-[#10b981]"
                    />
                    <button 
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#10b981]"
                    >
                        <i className="fa-solid fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="flex gap-[12px] items-center">
                <div className="md:hidden">
                    <button 
                        onClick={() => setShowMobileSearch(true)} 
                        className="w-[30px] h-[30px] flex items-center justify-center text-[#000] dark:text-[#fff]"
                    >
                        <i className="fa-solid fa-search"></i>
                    </button>
                </div>
                {theme === 'light' ?
                    <Light setTheme={setTheme} /> :
                    <Dark setTheme={setTheme} />}
            </div>

            {/* Mobile Search Popup */}
            {showMobileSearch && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-center pt-20 z-[9999] md:hidden">
                    <div className="relative bg-[#fff] dark:bg-[#282828] w-full max-w-[90%] mx-[16px] rounded-[8px] p-[16px]">
                        <div className="absolute top-[12px] right-[12px]">
                            <button 
                                onClick={() => setShowMobileSearch(false)} 
                                className="text-[#000] dark:text-[#fff]"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <h3 className="text-xl font-[600] mb-[16px] text-[#000] dark:text-[#fff]">Tìm kiếm manga</h3>
                        <form onSubmit={handleSearch} className="flex w-full relative">
                            <input
                                type="text"
                                placeholder="Nhập tên manga..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-2 px-4 pr-10 rounded-full bg-[#e8ebed] dark:bg-[rgba(204,204,204,0.2)] text-[#000] dark:text-[#fff] focus:outline-none focus:ring-2 focus:ring-[#10b981]"
                                autoFocus
                            />
                            <button 
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#10b981]"
                            >
                                <i className="fa-solid fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;

const Light = ({ setTheme }) => {
    return (
        <svg onClick={() => setTheme('dark')} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] mr-[12px] cursor-pointer"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-[#000]"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-[#000] dark:stroke-[#fff]"></path></svg>
    )
}

const Dark = ({ setTheme }) => {
    return (
        <svg onClick={() => setTheme('light')} viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] mr-[12px] cursor-pointer"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-[#fff]"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-[#fff]"></path></svg>
    )
}