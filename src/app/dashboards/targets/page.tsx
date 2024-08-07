import Image from "next/image";

const Targets = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
        <div className="start">
          <div className="title">
            <h3 className="font-semibold">
              Yet to Start <span className="text-gray-300">6</span>
            </h3>
            <div className="w-full h-1 bg-green-400 rounded-sm mb-6 mt-2"></div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inprogess">
          <div className="title">
            <h3 className="font-semibold">
              In progress <span className="text-gray-300">2</span>
            </h3>
            <div className="w-full h-1 bg-violet-400 rounded-sm mb-6 mt-2"></div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="complete">
          <div className="title">
            <h3 className="font-semibold">
              Complete <span className="text-gray-300">2</span>
            </h3>
            <div className="w-full h-1 bg-black rounded-sm mb-6 mt-2"></div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-7 rounded-xl mb-6">
            <span className="text-sm text-gray-700 bg-slate-200 p-1 font-semibold rounded-md">
              UI Desgin
            </span>
            <h4 className="text-sm text-gray-950 my-3 font-semibold">
              Metting with customer
            </h4>
            <p className="text-sm mb-4">
              First, a disclaimer - the entrie process writing a blog post often
              takes a couple..
            </p>
            <div className="flex justify-between mt-2">
              <div className="img">
                <Image
                  priority={true}
                  src="/Ginger.svg"
                  alt="pepper"
                  width={26}
                  height={26}
                  className="bg-gray-500 rounded-full p-1"
                />
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65s11.053 34.485 23.793 47.225c12.738 12.74 29.32 21.803 47.223 23.793c17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182c-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588c8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047s-26.29-8.44-36.485-18.633c-10.194-10.195-17.182-23.43-18.632-36.485s2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27s40.126 14.96 56.195 31.03c16.07 16.068 27.696 36.45 31.03 56.195c3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16l12.726 12.727l220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642c-4.118-24.402-17.718-47.595-36.05-65.926c-18.33-18.332-41.523-31.93-65.925-36.05c-6.1-1.03-12.296-1.422-18.474-1.114z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
                <div className="flex items-center ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
                    />
                  </svg>
                  <span className="ml-1">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Targets;
