"use client"
import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface GridProps {
    lists: [];
    pathImage: string;
    isLoading: boolean;
}

export const GridView: FC<GridProps> = ({lists, pathImage, isLoading}: GridProps) => {
  return (
    <div className="gridView min-h-screen">
      <SkeletonTheme
        baseColor="#1e293b" 
        highlightColor="#fff" 
        borderRadius="0.5rem"
        duration={2.5}
        direction="ltr">

        <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-5 mb-4">
        {lists.map((item: any, index: number) => (
            <div className="bg-gray-100 dark:bg-slate-800 dark:border-slate-800 text-center border relative h-auto" key={index}>
            <Link href={`/movies/`+item.slug}>
                {isLoading && (
                  <Skeleton height={300} containerClassName="avatar-skeleton" style={{marginBottom: '5px', width: '100%', height: '100%', display: 'block'}} />)
                }
                <Image 
                src={pathImage + item.thumb_url}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-full mb-3"
                priority={true}
                style={{ display: isLoading ? "none" : undefined }}
                />
                <div className="pt-2 pb-2 text-sm absolute bottom-0 z-10 w-full text-black font-bold bg-white dark:bg-slate-800 dark:text-white">
                  <h3 className="truncate ...">{isLoading ? <Skeleton /> : item.name}</h3>
                  <p className="truncate ...">{isLoading ? <Skeleton /> : `(` + item.origin_name + `)`}</p>
                </div>
            </Link>
            </div>
          ))}
        </div>
        </SkeletonTheme>
    </div>
  )
}
