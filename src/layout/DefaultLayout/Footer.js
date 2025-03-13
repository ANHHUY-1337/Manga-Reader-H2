import logo from "/Users/hoala/OneDrive/Desktop/2025/mangareaderh2/mangareaderh2/src/assets/mangareder.png";

function Footer() {
    return (
        <div className='mt-[64px] bg-[#3f3f3f] lg:p-[32px] mobile:px-[16px] mobile:py-[48px]'>
            <div className='flex gap-[32px] lg:flex-row mobile:flex-col'>
                <div className='lg:w-[25%] mobile:w-full text-[#fff]'>
                    {}
                    <figure className='lg:w-[300px] mobile:w-full lg:h-[300px] mobile:h-full border-2 border-solid border-[#e3e3e3] dark:border-[#636363] overflow-hidden rounded-[8px]'>
                        <img className='duration-300 hover:scale-[1.1]' src={logo} alt='Logo' />
                    </figure>
                </div>
                <div className='lg:w-[50%] mobile:w-full text-[#fff]'>
                    <h4 className='text-2xl font-[600] mb-[24px]'>
                        Nguồn truyện tranh
                        <a className='text-[#10b981] font-[600] ml-[8px] hover:underline' target="_blank" rel="noreferrer" href='https://otruyen.cc/'>otruyen.cc</a>
                    </h4>
                    <p className='text-lg text-justify'>123456123456</p>
                </div>
                <div className='lg:w-[25%] mobile:w-full text-[#fff]'>
                    <h4 className='text-2xl font-[600] mb-[24px]'>
                        Liên hệ với tôi
                    </h4>
                    <div className='flex flex-col gap-[12px]'>
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer" className='text-xl hover:text-[#10b981] duration-300'>
                            <i className="mr-[8px] fa-brands fa-square-facebook"></i>
                            Facebook
                        </a>
                        <a href='https://github.com' target="_blank" rel="noopener noreferrer" className='text-xl hover:text-[#10b981] duration-300'>
                            <i className="mr-[8px] fa-brands fa-github"></i>
                            Github
                        </a>
                        <a href='https://telegram.org' target="_blank" rel="noopener noreferrer" className='text-xl hover:text-[#10b981] duration-300'>
                            <i className="mr-[8px] fa-brands fa-telegram"></i>
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-[48px] font-[600] text-[#fff] text-center'>
                <p className='mb-[8px]'>ssssss</p>
                <span className='text-xl text-[#10b981]'>Hello</span>
            </div>
        </div>
    );
}

export default Footer;