import { useParams, Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { comic } from "../api";

function Info() {
    const { slug } = useParams();
    const [data] = useFetch(`${comic}/${slug}`);
    const [infoComic, setInfoComic] = useState(null);
    const [author, setAuthor] = useState([]);
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        if (data?.data?.item) {
            const { item } = data.data;
            setInfoComic(item);
            setAuthor(item.author || []);
            setChapters(item.chapters?.[0]?.server_data || []);
        }
    }, [data]);

    if (!data) {
        return <h4 className='lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]'>Đang tải dữ liệu...</h4>;
    }

    return (
        <Fragment>
            <div className='lg:flex lg:flex-row mobile:flex-col mobile:gap-[12px] p-[16px] bg-[rgba(16,185,129,0.15)] rounded-[8px] dark:bg-[rgba(204,204,204,0.2)]'>
                <figure className="flex-shrink-0 lg:w-[200px] mobile:w-full lg:h-[300px] mobile:h-auto overflow-hidden rounded-[8px]">
                    <img
                        loading="lazy"
                        src={`https://otruyenapi.com/uploads/comics/${infoComic?.thumb_url}`}
                        alt={infoComic?.name}
                    />
                </figure>
                <div className='overflow-hidden flex flex-col gap-[4px] flex-1 lg:pl-[32px]'>
                    <h4 className="lg:text-3xl mobile:text-lg font-[600] lg:mt-0 mobile:mt-[16px] dark:text-[#fff]">
                        {infoComic?.name}
                    </h4>

                    <ul className='flex gap-[12px] text-lg flex-wrap'>
                        <b className="text-[#10b981]">Tác giả: </b>
                        {author.map((author, index) => (
                            <li className='dark:text-[#fff]' key={index}>
                                {author || 'Chưa cập nhật'}
                            </li>
                        ))}
                    </ul>
                    <div className='flex gap-[12px] text-lg'>
                        <b className="text-[#10b981]">Ngày cập nhật:</b>
                        <span className='dark:text-[#fff]'>{infoComic?.updatedAt}</span>
                    </div>
                    <div>
                        <b className="text-[#10b981] text-lg">Nội dung: </b>
                        <p
                            className="dark:text-[#fff]"
                            dangerouslySetInnerHTML={{ __html: infoComic?.content }}>
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-[32px]'>
                <div className='flex items-center justify-between'>
                    <h4 className="lg:text-2xl mobile:text-xl font-[600] dark:text-[#fff]">
                        <i className="mr-[8px] fa-regular fa-rectangle-list"></i>
                        Danh sách chương
                    </h4>
                </div>

                <ul className='flex flex-wrap gap-[12px] mt-[12px]'>
                    {chapters.length > 0 ? (
                        chapters.map((chapter, index) => (
                            <li
                                className="transition-all hover:scale-[1.05] rounded-[8px] xl:w-chapter-desktop lg:w-chapter-table mobile:w-chapter-mobile relative bg-[#10b981]"
                                key={index}>
                                <Link
                                    className="py-[4px] px-[12px] mobile:px-[8px] block text-sm text-[#fff] text-center"
                                    to={`/read/${slug}/${chapter.chapter_api_data.split('/').pop()}`}>
                                    Chương {chapter.chapter_name}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <span className="font-[600] text-xl text-[#d90429]">Không có dữ liệu!</span>
                    )}
                </ul>
            </div>
        </Fragment>
    );
}

export default Info;