"use client";
import { Breadcrumb } from "flowbite-react";
import { useSelectedLayoutSegment , useSelectedLayoutSegments   } from 'next/navigation'

function Header() {
  const segments = useSelectedLayoutSegments();
  const segmentpast = useSelectedLayoutSegment()
  return (
    <div className="flex justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700 ">
      <Breadcrumb aria-label="Default breadcrumb example" className="bg-white capitalize text-sm flex items-center">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        {segments.map((segment, index) => (
          <Breadcrumb.Item href={segment === segmentpast ? '/'+segmentpast : segment} key={index}>{segment}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
}

export default Header;
