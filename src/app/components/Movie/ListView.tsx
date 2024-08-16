"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ListProps {
  lists: [];
  pathImage: string;
  isLoading: boolean;
}
export const ListView: FC<ListProps> = ({
  lists,
  pathImage,
  isLoading,
}: ListProps) => {
  return (
    <div className="listView min-h-screen">
      <SkeletonTheme
        baseColor="#1e293b" 
        highlightColor="#fff" 
        borderRadius="0.5rem"
        duration={2.5}
        direction="ltr"
      >
        <table className="table-auto min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <thead className="bg-gray-50 dark:bg-slate-900">
            <tr>
              <th className="w-2/3 px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Tên
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Năm
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Ngày Cập Nhật
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-gray-600">
            {lists.map((item: any, index: number) => (
              <tr key={index}>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-14 w-12">
                      {isLoading && (
                        <Skeleton
                          width={50}
                          height={50}
                          containerClassName="avatar-skeleton"
                        />
                      )}
                      <Image
                        src={pathImage + item.thumb_url}
                        alt={item.name}
                        className="h-full w-full flex-none bg-gray-50"
                        priority={true}
                        width={50}
                        height={50}
                        style={{ display: isLoading ? "none" : undefined }}
                      />
                    </div>
                    <div className="ml-4 w-full">
                      <Link href={`/film/` + item.slug} className="block">
                        <h3 className="font-medium max-w-md overflow-hidden overflow-ellipsis whitespace-nowrap text-violet-500 hover:text-sky-500">
                          {isLoading ? <Skeleton /> : item.name}
                        </h3>
                        <p className="text-sm max-w-md overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-200">
                          {isLoading ? (
                            <Skeleton />
                          ) : (
                            `(` + item.origin_name + `)`
                          )}
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                  {isLoading ? <Skeleton /> : item.year}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                  {isLoading ? <Skeleton /> : item.modified.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SkeletonTheme>
    </div>
  );
};
