"use client";

import type { CustomFlowbiteTheme } from "flowbite-react";
import { Tabs } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["tabs"] = {
  "tablist": {
    "styles": {
      "default": "flex-wrap border-none"
    },
    "tabitem": {
      "base": "flex items-center justify-center rounded-t-lg px-4 py-1 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300 disabled:dark:text-gray-500",
      "styles": {
        "default": {
          "active": {
            "on": "bg-white text-slate-950 dark:bg-slate-700 dark:text-slate-50 border-b border-slate-500",
            "off": "text-gray-300 hover:bg-white hover:text-slate-950 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
          }
        }
      }
    }
  }
};

const TabLists = () => {
  return (
    <div className="p-6 pt-0">
    <Tabs aria-label="Defualt" style="default" theme={customTheme}>
      <Tabs.Item active title="Tab 1">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 2">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 3">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
      </Tabs.Item>
      <Tabs.Item disabled title="Tab 5">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
      </Tabs.Item>
    </Tabs>
    </div>
    
  )
}

export default TabLists