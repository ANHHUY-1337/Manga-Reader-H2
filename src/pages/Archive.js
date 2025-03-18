import { Fragment, useContext, useEffect, useState } from 'react';
import Context from '../state/Context';
import Comic from '../layout/components/Comic';

function Archive() {
    const { user } = useContext(Context);
    const [archivedComics, setArchivedComics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load archived comics from localStorage
        const loadArchivedComics = () => {
            setLoading(true);
            const comicStorage = JSON.parse(localStorage.getItem('comic-storage')) || {};
            const userComics = comicStorage[user?.email] || [];
            setArchivedComics(userComics);
            setLoading(false);
        };

        loadArchivedComics();
    }, [user]);

    const handleClearArchive = () => {
        if (window.confirm('Bạn có chắc muốn xóa tất cả truyện khỏi kho lưu trữ?')) {
            const comicStorage = JSON.parse(localStorage.getItem('comic-storage')) || {};
            comicStorage[user?.email] = [];
            localStorage.setItem('comic-storage', JSON.stringify(comicStorage));
            setArchivedComics([]);
        }
    };

    return (
        <Fragment>
            <div className="mt-[32px]">
                <div className="flex justify-between items-center mb-[24px] mobile:p-[8px] text-[#10b981] dark:text-[#fff] p-[8px] rounded-[8px] border-2 border-solid border-[#10b981] dark:border-[#636363] bg-[rgba(16,185,129,0.15)] dark:bg-[rgba(204,204,204,0.2)]">
                    <h4 className="lg:text-2xl font-[900] mobile:text-lg mr-[12px]">
                        <i className="mr-[8px] fa-regular fa-bookmark"></i>
                        Kho Lưu Trữ
                    </h4>
                    {archivedComics.length > 0 && (
                        <button 
                            onClick={handleClearArchive}
                            className="py-2 px-4 bg-[#d90429] text-white rounded-lg hover:bg-opacity-90 transition"
                        >
                            <i className="fa-solid fa-trash-can mr-2"></i>
                            Xóa tất cả
                        </button>
                    )}
                </div>
                
                {loading ? (
                    <h4 className="lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]">Đang tải dữ liệu...</h4>
                ) : archivedComics.length > 0 ? (
                    <div className="flex mx-[-8px] flex-wrap gap-y-[24px]">
                        {archivedComics.map((comic, index) => (
                            <Comic key={index} data={comic} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <h4 className="lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]">
                            Kho lưu trữ trống
                        </h4>
                        <p className="mt-4 dark:text-[#fff]">
                            Bạn chưa lưu truyện nào vào kho lưu trữ
                        </p>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default Archive; 