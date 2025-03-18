import { Link } from "react-router-dom";

function Category({ isShowCategory, setIsShowCategory, data }) {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-[9999]">
            <div className="relative bg-[#fff] dark:bg-[#282828] w-full max-w-[1000px] mobile:max-w-[320px] mobile:mr-[16px] mobile:ml-[16px] rounded-[8px] p-[24px] mobile:p-[16px]">
                <div className="absolute top-[20px] right-[20px] mobile:top-[16px] mobile:right-[16px]">
                    <i onClick={() => setIsShowCategory(false)} className="cursor-pointer p-[6px] text-[#000] dark:text-[#fff] lg:text-2xl mobile:text-xl fa-solid fa-xmark"></i>
                </div>
                <h3 className="lg:text-2xl mobile:text-xl font-[600] mb-[24px] text-[#000] dark:text-[#fff]">Thể loại truyện</h3>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1 gap-[12px]">
                    {data?.data?.map((item, index) => (
                        <Link onClick={() => setIsShowCategory(false)} to={`/detail/the-loai/${item?.slug}`} key={index} className="flex items-center justify-center gap-[8px] py-[12px] px-[24px] rounded-[8px] cursor-pointer hover:bg-[#10b981] dark:hover:bg-[#10b981] hover:text-[#fff] bg-[#e8ebed] dark:bg-[rgba(204,204,204,0.2)] text-[#000] dark:text-[#fff]">
                            <span className="lg:text-base mobile:text-sm font-[500]">{item?.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category; 