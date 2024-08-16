"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Loading from "../../components/Loading";
import TabDrop from "@/app/components/Movie/TabDrop";

interface Imovie {
  episodes: [
    {
      server_data: [];
      server_name: string;
    }
  ];
  movie: {
    created: {};
    modified: {};
    _id: string;
    name: string;
    slug: string;
    origin_name: string;
    content: string;
    type: string;
    status: string;
    thumb_url: string;
    poster_url: string;
    is_copyright: boolean;
    sub_docquyen: boolean;
    chieurap: boolean;
    trailer_url: string;
    time: string;
    episode_current: string;
    episode_total: string;
    quality: string;
    lang: string;
    notify: string;
    showtimes: string;
    year: number;
    view: number;
    actor: any;
    director: any;
    category: [
      {
        id: string;
        name?: string;
        slug?: string;
      }
    ];
    country: [
      {
        id: string;
        name?: string;
        slug?: string;
      }
    ];
  };
}
const Page = () => {
  const pathName = usePathname().split("/");
  const path = pathName[2];
  const [data, setData] = useState<Imovie>({
    episodes: [{ server_data: [], server_name: "" }],
    movie: Object(),
  });
  const [episodes, setEpisodes] = useState({
    server_name: "",
    server_data: [],
  });
  const [isLoading, setLoading] = useState(true);
  const [isOpening, setOpening] = useState(true);

  const toggleBtn = () => {
    setOpening(!isOpening);
  }

  useEffect(() => {
    fetch(`https://ophim1.com/phim/` + path, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setEpisodes(data && data.episodes ? data.episodes[0] : []);
        setLoading(false);
      })
      .catch((e) => {
        throw e;
      });
  }, [path]);

  if (isLoading) return <Loading />;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="container mx-auto mt-2 px-8 py-2 w-full">
      <div className="information flex flex-col">
        <div className="over-flow-x-auto sm:-mx-6 lg:-mx-8 space-y-2">
          <div className="bg-gray-100 dark:bg-slate-800 p-2 rounded-2xl md:flex flex-wrap">
            <div className="leftImage relative w-full h-full md:w-1/3 lg:w-1/6">
              <Image
                src={data.movie.thumb_url}
                alt={data.movie.name}
                width={500}
                height={500}
                className="w-full h-auto rounded-xl"
                priority={true}
              />
            </div>
            <div className="rightImag w-full md:w-2/3 lg:w-5/6 pl-4 pt-0 mt-2 md:mt-0 text-sm md:text-base">
              <div className="text-center rounded-md">
                <h1 className="uppercase text-lg font-bold text-violet-500">
                  {data.movie.name}
                </h1>
                <h2 className="italic text-sky-500">
                  {data.movie.origin_name}
                </h2>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="align-baseline">
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Trạng Thái
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie.episode_current}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Số Tập
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie.episode_total}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Thời Lượng
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie.time}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Năm Phát Hành
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie.year}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Chất Lượng
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie.quality}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Ngôn Ngữ
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie.lang}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Đạo Diễn
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie ? data.movie.director : []}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Diễn Viên
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie.actor}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Thể Loại
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie && data.movie.category
                        ? data.movie.category.map((el) => el["name"])
                        : ""}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-400/20">
                    <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                      Quốc Gia
                    </td>
                    <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                      {data.movie && data.movie.category
                        ? data.movie.country.map((el) => el["name"])
                        : ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full">
            <div className="content-movie w-full p-2 space--y-2 mx-auto bg-gray-100 dark:bg-slate-800 rounded-2xl">
              <button
                onClick={toggleBtn}
                className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sky-900 bg-sky-300 dark:text-sky-400 dark:bg-sky-900 rounded-lg hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
                type="button"
              >
                <span>Nội dung phim</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className={isOpening ? "transform rotate-180 w-5 h-5 text-sky-500" : "w-5 h-5 text-sky-500"}
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isOpening ? <div className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-200" >
                <article>{data.movie.content.replace(/<\/?p>/g, '')}</article>
              </div> : ""}
              <div className="mt-4">
                <TabDrop name="Xem Phim" episodes={episodes} isEpisode={true}/>
              </div>

              <div className="mt-4">
                <TabDrop name="Nguồn Embed" episodes={episodes} isEpisode={false} type={1}/>
              </div>
              <div className="mt-4">
                <TabDrop name="Nguồn M3u8" episodes={episodes} isEpisode={false} type={2}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
