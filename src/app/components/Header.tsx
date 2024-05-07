"use client";
import { Breadcrumb } from "flowbite-react";
import { useSelectedLayoutSegment , useSelectedLayoutSegments   } from 'next/navigation'

function Header() {
  const segments = useSelectedLayoutSegments();
  const segmentpast = useSelectedLayoutSegment()
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example" className="bg-white h-16 text-sm flex items-center px-6 border-b border-gray-200 dark:border-gray-700 mb-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        {segments.map((segment, index) => (
          <Breadcrumb.Item href={segment === segmentpast ? '/'+segmentpast : segment} key={index}>{segment}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
}

export default Header;
