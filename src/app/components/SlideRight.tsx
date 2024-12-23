"use client";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Image from "next/image";
import { MenuToggle } from "./MenuToggle";

export const SlideRight = () => {
  const [isToggle, setToggle] = useState(false);
  const scope = useMenuAnimation(isToggle);

  function useMenuAnimation(isToggle: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const handleResize = () => {
        const isSmallScreen = window.innerWidth <= 768;
        if(!isSmallScreen && !isToggle) {
          setToggle(!isToggle);
        }

        const menuAnimations: any[] = isToggle
        ? [
            [
              "aside",
              { transform: "translateX(0%)", display: "block" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 },
            ],
            [
              "h3",
              { opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.01), at: "-0.1" },
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.02), at: "-0.1" },
            ],
          ]
        : [
            [
              "h3",
              { opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.01, { from: "last" }), at: "<" },
            ],
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.02, { from: "last" }), at: "<" },
            ],
            [
              "aside",
              { transform: "translateX(100%)", display: "none" },
              { at: "-0.1" },
            ],
          ];

        animate([
          [
            "path.top",
            { d: isToggle ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
            { at: "<" },
          ],
          ["path.middle", { opacity: isToggle ? 0 : 1 }, { at: "<" }],
          [
            "path.bottom",
            { d: isToggle ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
            { at: "<" },
          ],
          ...menuAnimations,
        ]);
      }
      // Trigger the resize handler on load and on resize
      handleResize();
      window.addEventListener("resize", handleResize);

      // Cleanup listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [isToggle, animate]);

    return scope;
  }

  const handleToogle = () => {
    setToggle(!isToggle);
  }
  return (
    <div
      className="relative max-md:absolute top-0 right-0 z-10 min-h-full bg-white border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      ref={scope}
    >
      {/* toggle button */}
      <MenuToggle toggle={handleToogle} />
      {/* toggle div */}
      <aside className="ease-linear duration-500 w-64 max-sm:w-full max-sm:hidden md:hidden lg:block md:h-screen">
        <div className="flex items-center justify-start p-4 mb-2">
          <h3 className="inline-flex">Notifications</h3>
        </div>
        <div className="overflow-x-hidden max-h-[80vh]">
          <div className="flex px-3 pb-4">
            <ul className="flex flex-col w-full">
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M17.416 2.624a.75.75 0 1 0-.832-1.248L13.669 3.32A4.488 4.488 0 0 0 12 3c-.59 0-1.153.113-1.669.32L7.416 1.376a.75.75 0 0 0-.832 1.248l2.36 1.573a4.493 4.493 0 0 0-1.368 2.475A5.447 5.447 0 0 1 8.938 6.5h6.125c.47 0 .926.06 1.361.172a4.493 4.493 0 0 0-1.368-2.475zM1.25 14a.75.75 0 0 1 .75-.75h3v-1.312c0-.836.26-1.611.704-2.248l-2.483-.994a.75.75 0 0 1 .558-1.392l3.136 1.254A3.92 3.92 0 0 1 8.938 8h6.124c.74 0 1.432.204 2.023.558l3.136-1.254a.75.75 0 1 1 .558 1.392l-2.483.994A3.92 3.92 0 0 1 19 11.938v1.312h3a.75.75 0 0 1 0 1.5h-3V15a6.97 6.97 0 0 1-.808 3.269l2.587 1.035a.75.75 0 0 1-.558 1.393l-2.892-1.158a6.987 6.987 0 0 1-4.579 2.421V15a.75.75 0 1 0-1.5 0v6.96a6.988 6.988 0 0 1-4.579-2.42L3.78 20.696a.75.75 0 1 1-.558-1.393l2.588-1.035A6.97 6.97 0 0 1 5 15v-.25H2a.75.75 0 0 1-.75-.75"
                      />
                    </svg>
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1">Your fixed bug.</span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      Just now
                    </span>
                  </span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M227.46 214c-16.52-28.56-43-48.06-73.68-55.09a68 68 0 1 0-51.56 0c-30.64 7-57.16 26.53-73.68 55.09a4 4 0 0 0 6.92 4C55 184.19 89.62 164 128 164s73 20.19 92.54 54a4 4 0 0 0 3.46 2a3.93 3.93 0 0 0 2-.54a4 4 0 0 0 1.46-5.46M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"
                      />
                    </svg>
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1">
                      New user resgistered.
                    </span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      54 minutes ago
                    </span>
                  </span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M17.416 2.624a.75.75 0 1 0-.832-1.248L13.669 3.32A4.488 4.488 0 0 0 12 3c-.59 0-1.153.113-1.669.32L7.416 1.376a.75.75 0 0 0-.832 1.248l2.36 1.573a4.493 4.493 0 0 0-1.368 2.475A5.447 5.447 0 0 1 8.938 6.5h6.125c.47 0 .926.06 1.361.172a4.493 4.493 0 0 0-1.368-2.475zM1.25 14a.75.75 0 0 1 .75-.75h3v-1.312c0-.836.26-1.611.704-2.248l-2.483-.994a.75.75 0 0 1 .558-1.392l3.136 1.254A3.92 3.92 0 0 1 8.938 8h6.124c.74 0 1.432.204 2.023.558l3.136-1.254a.75.75 0 1 1 .558 1.392l-2.483.994A3.92 3.92 0 0 1 19 11.938v1.312h3a.75.75 0 0 1 0 1.5h-3V15a6.97 6.97 0 0 1-.808 3.269l2.587 1.035a.75.75 0 0 1-.558 1.393l-2.892-1.158a6.987 6.987 0 0 1-4.579 2.421V15a.75.75 0 1 0-1.5 0v6.96a6.988 6.988 0 0 1-4.579-2.42L3.78 20.696a.75.75 0 1 1-.558-1.393l2.588-1.035A6.97 6.97 0 0 1 5 15v-.25H2a.75.75 0 0 1-.75-.75"
                      />
                    </svg>
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1">Your fixed bug.</span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      1 hours
                    </span>
                  </span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.41-1.41A7.938 7.938 0 0 1 4 12c0-2.21.89-4.22 2.34-5.66zm14.14 0l-1.41 1.41A7.955 7.955 0 0 1 20 12c0 2.22-.89 4.22-2.34 5.66l1.41 1.41A9.969 9.969 0 0 0 22 12c0-2.76-1.12-5.26-2.93-7.07M7.76 7.76A5.98 5.98 0 0 0 6 12c0 1.65.67 3.15 1.76 4.24l1.41-1.41A3.99 3.99 0 0 1 8 12c0-1.11.45-2.11 1.17-2.83zm8.48 0l-1.41 1.41A3.99 3.99 0 0 1 16 12c0 1.11-.45 2.11-1.17 2.83l1.41 1.41A5.98 5.98 0 0 0 18 12c0-1.65-.67-3.15-1.76-4.24M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                      />
                    </svg>
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1">
                      Miyamoto subscribed you.
                    </span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      To day, 11:59 AM
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-start p-4">
            <h3 className="inline-flex">Activities</h3>
          </div>
          <div className="flex px-3 pb-4">
            <ul className="flex flex-col w-full">
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-gray-500 rounded-full relative after:w-5 after:h-[1px] after:bg-[#e8e8e8] after:rotate-90 after:content-[' '] after:block after:absolute after:-bottom-4 after:left-1">
                    <Image
                      priority={true}
                      src="/Ginger.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1 block">
                      Change the style.
                    </span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      Just now
                    </span>
                  </span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-gray-300 rounded-full relative after:w-5 after:h-[1px] after:bg-[#e8e8e8] after:rotate-90 after:content-[' '] after:block after:absolute after:-bottom-4 after:left-1">
                    <Image
                      priority={true}
                      src="/Cuudles.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1 block">
                      Released a new version.
                    </span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      54 minutes ago
                    </span>
                  </span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-gray-500 rounded-full relative after:w-5 after:h-[1px] after:bg-[#e8e8e8] after:rotate-90 after:content-[' '] after:block after:absolute after:-bottom-4 after:left-1">
                    <Image
                      priority={true}
                      src="/Cuudles.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1 block">
                      Submitted a bug.
                    </span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      1 hours
                    </span>
                  </span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-gray-300 rounded-full">
                    <Image
                      priority={true}
                      src="/Ginger.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-xs">
                    <span className="text-[14px] mb-1 block">
                      Create new page.
                    </span>
                    <span className="flex flex-col text-gray-300 font-medium">
                      To day, 11:59 AM
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-start p-4">
            <h3 className="inline-flex">Contact</h3>
          </div>
          <div className="flex px-3 pb-4">
            <ul className="flex flex-col w-full">
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-green-500 rounded-full">
                    <Image
                      priority={true}
                      src="/Ginger.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-[14px]">Kate Morrision</span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-yellow-300 rounded-full">
                    <Image
                      priority={true}
                      src="/Cuudles.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-[14px]">Natalia Craig</span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-blue-500 rounded-full">
                    <Image
                      priority={true}
                      src="/Abby.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-[14px]">Meloday Macy</span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex flex-row items-center h-10 px-3">
                  <span className="bg-gray-500 rounded-full">
                    <Image
                      priority={true}
                      src="/Casper.svg"
                      alt="pepper"
                      width={26}
                      height={26}
                      className="p-1"
                    />
                  </span>
                  <span className="ml-3 text-[14px]">Drew Cano</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};
