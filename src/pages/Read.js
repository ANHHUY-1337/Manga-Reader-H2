import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/UseFetch";
import { comic, comicImage } from "../api";

function Read() {
  const params = useParams();
  const [data] = useFetch(`${comic}/${params?.slug}`);
  const [dataChapter] = useFetch(`${comicImage}/${params?.id}`);
  const [images, setImages] = useState([]);
  const [chapterPath, setChapterPath] = useState("");

  useEffect(() => {
    if (dataChapter?.data?.item) {
      const { chapter_image, chapter_path } = dataChapter.data.item;
      setImages(chapter_image || []);
      setChapterPath(chapter_path);
    }
  }, [dataChapter]);

  if (!data || !dataChapter) {
    return (
      <h4 className="text-2xl font-[600] dark:text-[#fff]">
        Đang tải dữ liệu...
      </h4>
    );
  }

  return (
    <Fragment>
      <div className="flex flex-col gap-[24px] items-center justify-center">
        <div className="bg-[rgba(16,185,129,0.15)] dark:bg-[rgba(204,204,204,0.2)] w-full p-[16px] rounded-[8px]">
          <div className="flex justify-center items-center flex-col gap-[16px] dark:text-[#fff]">
            <h4 className="lg:text-3xl mobile:text-xl font-[600] text-center">
              {`${data?.data?.item?.name} - Chương ${dataChapter?.data?.item?.chapter_name}`}
            </h4>
            <span className="text-lg font-[600] text-center text-[#d90429] dark:text-[#fff]">
              Nếu truyện bị lỗi vui lòng liên hệ qua :
              <a
                href="mailto:example@example.com"
                target="_blank"
                rel="noopener"
                className="ml-[12px] underline"
              >
                IhutechH22@example.com
              </a>
            </span>
          </div>
        </div>

        <ul className="flex flex-col">
          {images.map((image, index) => (
            <li className="lg:w-[800px] h-full mobile:w-full" key={index}>
              <img
                loading="lazy"
                src={`https://sv1.otruyencdn.com/${chapterPath}/${image.image_file}`}
                alt="image"
              />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Read;
