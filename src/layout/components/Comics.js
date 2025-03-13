import { useState, useEffect } from "react";

import Comic from "./Comic";
import useFetch from "../../hooks/UseFetch";

function Comics({ api }) {
    const [data] = useFetch(api)
    const [comics, setComics] = useState([])

    useEffect(() => {
        data && setComics((data?.data?.items || []))
    }, [data])

    return (
        <div className="mt-[64px]">
            {data &&
                <div className="flex justify-between items-center mb-[24px] mobile:p-[8px] text-[#10b981] dark:text-[#fff] p-[8px] rounded-[8px] border-2 border-solid border-[#10b981] dark:border-[#636363] bg-[rgba(16,185,129,0.15)] dark:bg-[rgba(204,204,204,0.2)]">
                    <h4 className="lg:text-2xl font-[900] mobile:text-lg mr-[12px]">
                        <i className="mr-[8px] fa-solid fa-book-open"></i>
                        {data?.data?.titlePage}
                    </h4>
                </div>}
            <div className="flex mx-[-8px] flex-wrap gap-y-[24px]">
                {comics.map((comic, index) => (
                    <Comic key={index} data={comic} />
                ))}
            </div>
        </div>
    );
}

export default Comics;