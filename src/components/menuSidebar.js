'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MenuSidebar = ({ href, icon, title }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex items-center p-2 text-gray-500 rounded-lg  hover:bg-gray-100  group ${
        isActive ? 'bg-gray-100' : ''
      }`}
    >
      <div
        className={`w-5 transition duration-75  group-hover:text-gray-900 flex items-center ${
          isActive ? 'text-gray-900' : 'text-gray-500'
        }`}
      >
        {icon}
      </div>
      <span className="ms-3">{title}</span>
    </Link>
  );
};

export default MenuSidebar;
