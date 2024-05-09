"use client";

export const SlideLeft = () => {
  const menuLists = [
    {
      group: "dashboard",
      child: [
        { name: "dashboard", lib: "i-mdi-home-outline", badges: "", color: "" },
      ],
    },
    {
      group: "project",
      child: [
        { name: "manager", lib: "i-bx-box", badges: "", color: "" },
        { name: "task", lib: "i-tdesign-task", badges: "", color: "" },
        {
          name: "client",
          lib: "i-mdi-account-group",
          badges: "1k",
          color: "text-green-300",
        },
      ],
    },
    {
      group: "account",
      child: [
        { name: "profile", lib: "i-mdi-account", badges: "", color: "" },
        { name: "notification", lib: "i-mdi-bell", badges: "10", color: "" },
        { name: "setting", lib: "i-lucide-settings", badges: "", color: "" },
        {
          name: "logout",
          lib: "i-mdi-lock-open",
          badges: "",
          color: "text-red-300",
        },
      ],
    },
  ];

  return (
    <>
      <aside className="w-64 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 relative">
        <nav className="bg-white dark:bg-gray-800">
          <div className="py-3">
            <a href="#" className="flex ms-2 md:me-24">
              <svg
                className="w-10 h-10 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Brandname
              </span>
            </a>
          </div>
        </nav>
        <div className="px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {menuLists.map((menu, i) => (
              <div key={i}>
                {menu.child.length > 1 ? (
                  <li className="my-px">
                    <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      {menu.group}
                    </span>
                  </li>
                ) : (
                  ""
                )}
                {menu.child.length === 1 &&
                  menu.child.map((item, index) => (
                    <li className="my-px" key={index}>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <span
                          className={`${item.lib} flex items-center justify-center text-lg text-gray-400 w-7 h-7 ${item.color}`}
                        ></span>
                        <span className="ms-3 capitalize">{item.name}</span>
                        {item.badges !== "" ? (
                          <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">
                            {item.badges}
                          </span>
                        ) : (
                          ""
                        )}
                      </a>
                    </li>
                  ))}
                {menu.child.length > 1 &&
                  menu.child.map((item, index) => (
                    <li className="my-px" key={index}>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <span
                          className={`${item.lib} flex items-center justify-center text-lg text-gray-400 w-7 h-7 ${item.color}`}
                        ></span>
                        <span className="ms-3 capitalize">{item.name}</span>
                        {item.badges !== "" ? (
                          <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">
                            {item.badges}
                          </span>
                        ) : (
                          ""
                        )}
                      </a>
                    </li>
                  ))}
              </div>
            ))}
          </ul>
        </div>
        <p className="text-sm text-gray-600 text-center absolute bottom-0">
          © Brandname 2024. All rights reserved.{" "}
          <a href="#">by Truong Tin</a>
        </p>
      </aside>
    </>
  );
};
