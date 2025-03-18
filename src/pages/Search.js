import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import Comic from "../layout/components/Comic";
import { search } from "../api";

function Search() {
    const { query } = useParams();
    const [data] = useFetch(`${search}?q=${encodeURIComponent(query)}`);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data) {
            // Process the search results to ensure they have all required fields
            const processedResults = (data?.data?.items || []).map(item => {
                // Ensure the item has all required properties that Comic component expects
                return {
                    ...item,
                    slug: item.slug || '',
                    name: item.name || 'Không có tên',
                    thumb_url: item.thumb_url || '',
                    // Add any other defaults as needed
                };
            });
            
            setSearchResults(processedResults);
            setLoading(false);
        }
    }, [data]);

    return (
        <Fragment>
            <div className="mt-[32px]">
                <div className="flex justify-between items-center mb-[24px] mobile:p-[8px] text-[#10b981] dark:text-[#fff] p-[8px] rounded-[8px] border-2 border-solid border-[#10b981] dark:border-[#636363] bg-[rgba(16,185,129,0.15)] dark:bg-[rgba(204,204,204,0.2)]">
                    <h4 className="lg:text-2xl font-[900] mobile:text-lg mr-[12px]">
                        <i className="mr-[8px] fa-solid fa-search"></i>
                        Kết quả tìm kiếm: {query}
                    </h4>
                </div>
                
                {loading ? (
                    <h4 className="lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]">Đang tải dữ liệu...</h4>
                ) : searchResults.length > 0 ? (
                    <div className="flex mx-[-8px] flex-wrap gap-y-[24px]">
                        {searchResults.map((comic, index) => (
                            <Comic key={index} data={comic} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <h4 className="lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]">
                            Không tìm thấy kết quả nào cho "{query}"
                        </h4>
                        <p className="mt-4 dark:text-[#fff]">
                            Hãy thử tìm kiếm với từ khóa khác
                        </p>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default Search; 