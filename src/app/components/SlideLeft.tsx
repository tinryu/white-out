"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import Link from "next/link";

export const SlideLeft = () => {
  const $color = "text-gray-400";
  const menuLists = [
    {
      group: "dashboard",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "dashboard",
          lib: "i-mdi-home-outline",
          badges: "",
          color: $color,
          src: "/dashboards",
        },
      ],
    },
    {
      group: "project",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "project",
          lib: "i-bx-box",
          badges: "",
          color: $color,
          src: "/projects",
        },
      ],
    },
    {
      group: "account",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "account",
          lib: "i-mdi-account",
          badges: "",
          color: $color,
          src: "/account",
        },
      ],
    },
    {
      group: "authentication",
      lib: "i-mdi-menu-down",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "account info",
          lib: "i-mdi-info",
          badges: "",
          color: $color,
          src: "/authentication/accountinfo",
        },
        {
          name: "bill detail",
          lib: "i-mdi-document",
          badges: "",
          color: $color,
          src: "/authentication/billdetail",
        },
        {
          name: "account type",
          lib: "i-mdi-account",
          badges: "",
          color: $color,
          src: "/authentication/chooseaccounttype",
        },
        {
          name: "forgot",
          lib: "i-mdi-lock",
          badges: "",
          color: $color,
          src: "/authentication/forgot",
        },
        {
          name: "create new password",
          lib: "i-mdi-lock",
          badges: "",
          color: $color,
          src: "/authentication/setupnewpass",
        },
        {
          name: "sign in",
          lib: "i-mdi-lock",
          badges: "",
          color: $color,
          src: "/authentication/signin",
        },
        {
          name: "sign up",
          lib: "i-mdi-lock",
          badges: "",
          color: $color,
          src: "/authentication/signup",
        },
        {
          name: "verification two step",
          lib: "i-mdi-check",
          badges: "",
          color: $color,
          src: "/authentication/verificationtwostep",
        },
      ],
    },
    {
      group: "chat",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "chat",
          lib: "i-mdi-chat",
          badges: "",
          color: $color,
          src: "/chat",
        },
      ],
    },
    {
      group: "contact",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "contact",
          lib: "i-mdi-contact",
          badges: "",
          color: $color,
          src: "/contact",
        },
      ],
    },
    {
      group: "account",
      lib: "i-mdi-menu-down",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "setting",
          lib: "i-lucide-settings",
          badges: "",
          color: $color,
          src: "/dashboards/settings",
        },
        {
          name: "logout",
          lib: "i-mdi-lock-open",
          badges: "",
          color: $color,
          src: "#",
        },
      ],
    },
    {
      group: "film",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "film",
          lib: "i-mdi-movie-open-minus",
          badges: "",
          color: $color,
          src: "/film",
        },
      ],
    },
  ];

  const [openMenuId, setOpenMenuId] = useState(null);
  const [isToggleLeft, setToggleLeft] = useState(false);
  const [isSubToggle, setSubToggle] = useState(false);

  const toggleSubMenu = (id: any) => {
    setOpenMenuId((prevState) => (prevState !== id ? id : null));
    console.log(openMenuId);
    setSubToggle(true);
    console.log(isSubToggle);
  };
  const toggleButton = () => {
    setToggleLeft(!isToggleLeft);
    setSubToggle(!isSubToggle);
  };

  const scope = useMenuAnimation(isToggleLeft);

  // animate slide
  function useMenuAnimation(isToggleLeft: boolean) {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      const handleResize = () => {
        const isSmallScreen = window.innerWidth <= 768;
        if (!isSmallScreen && !isToggleLeft) {
          setToggleLeft(true); // Reset isToggleLeft when switching to large screen
          setSubToggle(false);
        }
        const menuAnimations: any[] = isToggleLeft
          ? [
              [
                "span.txt_menu",
                {
                  transform: "scale(1)",
                  opacity: 1,
                  filter: "blur(0px)",
                  display: "block",
                },
                { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 },
              ],
            ]
          : [
              [
                "span.txt_menu",
                {
                  transform: "scale(0.5)",
                  opacity: 0,
                  filter: "blur(10px)",
                  display: "none",
                },
              ],
            ];

          animate([...menuAnimations]);
      };
      // Trigger the resize handler on load and on resize
      handleResize();
      window.addEventListener("resize", handleResize);

      // Cleanup listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [animate, isToggleLeft]);

    return scope;
  }

  return (
    <div
      className="relative max-sm:absolute top-0 left-0 z-10 min-h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      ref={scope}
    >
      <aside className="left_slide lg:w-64 md:w-48 relative">
        <div className="py-3 flex items-center max-sm:justify-start relative ml-[15px]">
          <Link href="" className="flex">
            <svg
              className="w-10 h-10 text-gray-500 logo"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            <span className="max-sm:hidden txt_menu self-center text-xl max-sm:text-base whitespace-nowrap dark:text-white">
              Brandname
            </span>
            <button
              className="absolute md:hidden max-sm:block top-14 -right-12 bg-slate-200 rounded-r-xl"
              onClick={toggleButton}
            >
              <span
                className={`${
                  isToggleLeft ? "rotate-180" : "rotate-0"
                } ease-linear duration-500 i-mdi-chevron-right-circle text-4xl text-black flex items-center my-1 mr-2 ml-1`}
              ></span>
            </button>
          </Link>
        </div>
        <div className="px-3 pb-4 overflow-y-auto max-h-[80vh] bg-white dark:bg-gray-800">
          <nav className="space-y-2">
            <ul>
              {menuLists.map((menu, i) => (
                <li key={i} className="my-px">
                  {menu.child.length === 1 &&
                    menu.child.map((item, index) => (
                      <Link
                        key={index}
                        href={item.src ? item.src : ""}
                        className="flex items-center max-sm:justify-center p-2 text-base text-gray-400 font-semibold rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 group"
                      >
                        <span
                          className={`${item.lib} ease-linear duration-300 flex items-center max-sm:justify-center text-base w-7 h-7`}
                        ></span>
                        <span className="ease-linear duration-300 max-sm:hidden ms-3 capitalize txt_menu max-sm:w-20 overflow-hidden text-ellipsis">
                          {item.name}
                        </span>
                        {item.badges !== "" ? (
                          <span className="flex items-center max-sm:justify-center text-xs text-gray-400 bg-red-100 h-6 px-2 rounded-full ml-auto">
                            {item.badges}
                          </span>
                        ) : (
                          ""
                        )}
                      </Link>
                    ))}

                  {menu.child.length > 1 ? (
                    <>
                      <Link
                        onClick={() => toggleSubMenu(i)}
                        href={menu.src ? menu.src : ""}
                        className={`${!isToggleLeft ? 'hidden' : ''} flex items-center max-sm:justify-center p-2 text-base text-gray-400 font-semibold rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 group`}
                      >
                        <span
                          className={`${menu.lib} ${
                            isSubToggle && openMenuId && openMenuId === i
                              ? "rotate-0"
                              : "-rotate-90"
                          } ease-linear duration-300 flex items-center justify-center text-base w-7 h-7`}
                        ></span>
                        <span className="ease-linear duration-300 max-sm:hidden ms-3 capitalize txt_menu max-sm:w-20 overflow-hidden text-ellipsis">
                          {menu.group}
                        </span>
                      </Link>
                      <AnimatePresence>
                        {isSubToggle && openMenuId && openMenuId === i && (
                          <motion.ul
                            initial={{
                              height: 0,
                              opacity: 0,
                              filter: "blur(10px)",
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              filter: "blur(0px)",
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              filter: "blur(10px)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="md:pl-1"
                          >
                            {menu.child.map((item, index) => (
                              <li className="my-px" key={index}>
                                <Link
                                  href={item.src ? item.src : ""}
                                  className="flex items-center max-sm:justify-center p-2 text-sm text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 group"
                                >
                                  <span
                                    className={`${item.lib} flex items-center max-sm:justify-center text-sm  w-6 h-6`}
                                  ></span>
                                  <span className="ms-3 capitalize txt_menu max-sm:w-20 overflow-hidden text-ellipsis">
                                    {item.name}
                                  </span>
                                  {item.badges !== "" ? (
                                    <span className="flex items-center max-sm:justify-center text-sm text-gray-400 bg-red-100 h-6 px-2 rounded-full ml-auto">
                                      {item.badges}
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <p className="text-xs text-gray-600 text-center absolute bottom-0 left-4">
        <Link
          href={{ pathname: "/contact", query: { slug: "by-tin-truong" } }}
          className="max-sm:block hidden text-[10px]"
        >
          <span className="i-mdi-alpha-i-circle text-3xl text-gray-500"></span>
        </Link>
        <span className="max-sm:hidden">
          © Brandname 2024. All rights reserved. <a href="#">by Tin Truong</a>
        </span>
      </p>
    </div>
  );
};
