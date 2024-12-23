"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";

interface RandomDataItem {
  name: string;
  email: string;
  countNum: number;
  increaseNum: number;
}
const randomData = (): RandomDataItem[] => {
  const obj = (): RandomDataItem => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    countNum: faker.number.int({max: 100}),
    increaseNum: faker.number.float({ max: 100, fractionDigits: 2 })
  });
  return Array.from({ length: 3 }, obj);
};
const Project = () => {
  const [data, setData] = useState<RandomDataItem[]>([]);

  // Use useEffect to generate data only on the client side
  useEffect(() => {
    setData(randomData());
  }, []);
  
  return (
    <div className="w-full min-h-screen">
      <h1 className="font-bold text-2xl text-gray-700 mb-5 ml-2">
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {data.map((item, i) => (
          <div className="flex items-center justify-between rounded-3xl p-5 bg-[#e3f5ff]" key={i}>
          <div className="l-side">
            <h1>{item.name}</h1>
            <p className="mt-4 block font-bold text-2xl">{item.countNum}</p>
          </div>
          <div className="r-side">
            <p className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"
                />
              </svg>
            </p>
            <p className="mt-4 flex flex-wrap">
              <span>+ {item.increaseNum}%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 3.5h4v4" />
                  <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
                </g>
              </svg>
            </p>
          </div>
        </div>
        ))}
        {/* <div className="flex items-center justify-between rounded-3xl p-5 bg-[#e3f5ff]">
          <div className="l-side">
            <h1>Current Projects</h1>
            <p className="mt-4 block font-bold text-2xl">268</p>
          </div>
          <div className="r-side">
            <p className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"
                />
              </svg>
            </p>
            <p className="mt-4 flex flex-wrap">
              <span>+ 11.02%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 3.5h4v4" />
                  <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
                </g>
              </svg>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-3xl p-5 bg-[#e5ecf6]">
          <div className="l-side">
            <h1>Project Finance</h1>
            <p className="mt-4 block font-bold text-2xl">$3,000</p>
          </div>
          <div className="r-side">
            <p className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 26 26"
              >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M10.097 8.3c-.646.484-1 1.115-1 1.77c0 .656.354 1.287 1 1.772c.646.485 1.562.8 2.595.8a.5.5 0 0 1 0 1c-1.228 0-2.36-.373-3.195-1c-.836-.627-1.4-1.53-1.4-2.571c0-1.04.564-1.945 1.4-2.572c.836-.626 1.967-.999 3.195-.999c1.918 0 3.647.919 4.314 2.334a.5.5 0 0 1-.905.426c-.457-.97-1.761-1.76-3.409-1.76c-1.033 0-1.949.315-2.595.8" />
                  <path d="M14.957 17.983c.646-.484.999-1.116.999-1.77c0-.656-.353-1.288-1-1.772c-.646-.485-1.562-.8-2.594-.8a.5.5 0 1 1 0-1c1.228 0 2.36.373 3.195 1s1.399 1.53 1.399 2.571c0 1.04-.564 1.945-1.4 2.571c-.835.627-1.966 1-3.194 1c-1.918 0-3.647-.919-4.314-2.334a.5.5 0 0 1 .905-.426c.457.97 1.76 1.76 3.409 1.76c1.032 0 1.948-.315 2.595-.8M12 4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 12 4" />
                  <path d="M12 19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5" />
                  <path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" />
                </g>
              </svg>
            </p>
            <p className="mt-4 flex flex-wrap">
              <span>- 0.03%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 3.5h4v4" />
                  <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
                </g>
              </svg>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-3xl p-5 bg-[#e3f5ff]">
          <div className="l-side">
            <h1>Our Clients</h1>
            <p className="mt-4 block font-bold text-2xl">31</p>
          </div>
          <div className="r-side">
            <p className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.719 19.752l-.64-5.124A3 3 0 0 0 13.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 9.266 22h5.468a2 2 0 0 0 1.985-2.248"
                  />
                  <circle cx="12" cy="5" r="3" />
                  <circle cx="4" cy="9" r="2" />
                  <circle cx="20" cy="9" r="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 14h-.306a2 2 0 0 0-1.973 1.671l-.333 2A2 2 0 0 0 3.361 20H7m13-6h.306a2 2 0 0 1 1.973 1.671l.333 2A2 2 0 0 1 20.639 20H17"
                  />
                </g>
              </svg>
            </p>
            <p className="mt-4 flex flex-wrap">
              <span>+ 15.03%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 3.5h4v4" />
                  <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
                </g>
              </svg>
            </p>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-sm:grid-cols-1">
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Facebook.png"
                alt="facebook"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-green-500 rounded-full">
              <Image
                src="/Ginger.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-green-500 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-green-500">Complete</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-green-500 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Dropbox.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-gray-600 rounded-full">
              <Image
                src="/Abby.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-gray-600 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-gray-600">Rejected</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-gray-600 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Mi.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-blue-500 rounded-full">
              <Image
                src="/Casper.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-blue-500 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-blue-500">Pending</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-blue-500 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Bitcoin.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-yellow-300 rounded-full">
              <Image
                src="/Cuudles.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-yellow-300 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-yellow-300">Approved</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-yellow-300 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/AdobeXD.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="bg-mint rounded-full">
              <Image
                src="/Ginger.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-mint rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-mint">In Progess</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-mint h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Facebook.png"
                alt="facebook"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-green-500 rounded-full">
              <Image
                src="/Ginger.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-green-500 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-green-500">Complete</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-green-500 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Dropbox.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-gray-600 rounded-full">
              <Image
                src="/Abby.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-gray-600 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-gray-600">Rejected</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-gray-600 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Mi.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-blue-500 rounded-full">
              <Image
                src="/Casper.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-blue-500 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-blue-500">Pending</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-blue-500 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/Bitcoin.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="ava bg-yellow-300 rounded-full">
              <Image
                src="/Cuudles.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-yellow-300 rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-yellow-300">Approved</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-yellow-300 h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
        <div className="flex-col items-center p-5 rounded-3xl bg-[#f7f9fb]">
          <div className="flex justify-between">
            <div className="l-side-t">
              <h3 className="font-bold">SnowUi</h3>
              <p className="text-sm text-gray-400">Due Date: Nov 10, 2022</p>
            </div>
            <div className="r-side-t">
              <Image
                src="/AdobeXD.png"
                alt="dropbox"
                priority={true}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="info flex items-center justify-between pt-6">
            <div className="bg-mint rounded-full">
              <Image
                src="/Ginger.svg"
                alt="pepper"
                width={36}
                height={36}
                className="p-1"
              />
            </div>
            <div className="status flex justify-start items-center">
              <span className="block bg-mint rounded-full w-2 h-2 mr-2"></span>
              <span className="text-sm text-mint">In Progess</span>
            </div>
          </div>
          <div className="w-full my-6 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-mint h-1.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="l-side-b">
              <p>
                36<span className="text-gray-300 text-sm">/</span>49{" "}
                <span className="text-gray-300 text-sm">Total Tasks</span>
              </p>
            </div>
            <div className="r-side-b">
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
