"use client";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { ListView } from "../components/Movie/ListView";

interface Imovie {
  items: [];
  pagination: {
    totalItems: number;
    totalItemsPerpage: number;
    currentPage: number;
    totalPages: number;
  };
  pathImage: string;
  status: boolean;
}

const Page = () => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const [data, setData] = useState<Imovie>({
    items: [],
    pagination: {
      totalItems: 0,
      totalItemsPerpage: 0,
      currentPage: 0,
      totalPages: 0,
    },
    pathImage: "",
    status: true,
  });
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${currentPage}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Network request failed");
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, isLoading]);

  const lists = data.items;
  const pathImage = data.pathImage;
  const pagination = data.pagination;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="overflow-auto">
      <ListView lists={lists} pathImage={pathImage} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalCount={pagination.totalItems}
        pageSize={24}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
export default Page;
