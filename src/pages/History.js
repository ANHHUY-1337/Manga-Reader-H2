import { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../state/Context';
import { formatTime } from '../utils';

function History() {
    const { user } = useContext(Context);
    const [historyItems, setHistoryItems] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load history from localStorage
        const loadHistory = () => {
            setLoading(true);
            const historyStorage = JSON.parse(localStorage.getItem('history-storage')) || {};
            const userHistory = historyStorage[user?.email] || {};
            setHistoryItems(userHistory);
            setLoading(false);
        };

        loadHistory();
    }, [user]);

    const handleClearHistory = () => {
        if (window.confirm('Bạn có chắc muốn xóa toàn bộ lịch sử đọc truyện?')) {
            const historyStorage = JSON.parse(localStorage.getItem('history-storage')) || {};
            historyStorage[user?.email] = {};
            localStorage.setItem('history-storage', JSON.stringify(historyStorage));
            setHistoryItems({});
        }
    };
    
    const handleRemoveHistoryItem = (slug) => {
        if (window.confirm('Bạn có chắc muốn xóa lịch sử đọc truyện này?')) {
            const historyStorage = JSON.parse(localStorage.getItem('history-storage')) || {};
            if (historyStorage[user?.email] && historyStorage[user?.email][slug]) {
                delete historyStorage[user?.email][slug];
                localStorage.setItem('history-storage', JSON.stringify(historyStorage));
                setHistoryItems({...historyStorage[user?.email]});
            }
        }
    };

    return (
        <Fragment>
            <div className="mt-[32px]">
                <div className="flex justify-between items-center mb-[24px] mobile:p-[8px] text-[#10b981] dark:text-[#fff] p-[8px] rounded-[8px] border-2 border-solid border-[#10b981] dark:border-[#636363] bg-[rgba(16,185,129,0.15)] dark:bg-[rgba(204,204,204,0.2)]">
                    <h4 className="lg:text-2xl font-[900] mobile:text-lg mr-[12px]">
                        <i className="mr-[8px] fa-solid fa-clock-rotate-left"></i>
                        Lịch Sử Đọc Truyện
                    </h4>
                    {Object.keys(historyItems).length > 0 && (
                        <button 
                            onClick={handleClearHistory}
                            className="py-2 px-4 bg-[#d90429] text-white rounded-lg hover:bg-opacity-90 transition"
                        >
                            <i className="fa-solid fa-trash-can mr-2"></i>
                            Xóa tất cả
                        </button>
                    )}
                </div>
                
                {loading ? (
                    <h4 className="lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]">Đang tải dữ liệu...</h4>
                ) : Object.keys(historyItems).length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {Object.entries(historyItems).map(([slug, chapters], index) => {
                            const lastRead = chapters[chapters.length - 1];
                            const comicName = lastRead?.data?.item?.comic_name || "Không xác định";
                            const chapterName = lastRead?.data?.item?.chapter_name || "Không xác định";
                            const chapterId = lastRead?.data?.item?._id || "";
                            const timestamp = lastRead?.timestamp || new Date().toISOString();
                            
                            return (
                                <div key={index} className="p-4 bg-[#e8ebed] dark:bg-[rgba(204,204,204,0.2)] rounded-lg flex items-center justify-between">
                                    <div className="flex-1 overflow-hidden">
                                        <h3 className="text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap dark:text-[#fff]">
                                            {comicName}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Đã đọc: Chương {chapterName} - {formatTime(timestamp)}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link 
                                            to={`/read/${slug}/${chapterId}`}
                                            className="py-2 px-4 bg-[#10b981] text-white rounded-lg hover:bg-opacity-90 transition"
                                        >
                                            <i className="fa-solid fa-book-open mr-2"></i>
                                            Đọc tiếp
                                        </Link>
                                        <button 
                                            onClick={() => handleRemoveHistoryItem(slug)}
                                            className="py-2 px-4 bg-[#d90429] text-white rounded-lg hover:bg-opacity-90 transition"
                                        >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <h4 className="lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]">
                            Chưa có lịch sử đọc truyện
                        </h4>
                        <p className="mt-4 dark:text-[#fff]">
                            Lịch sử đọc truyện của bạn sẽ hiển thị ở đây
                        </p>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default History; 