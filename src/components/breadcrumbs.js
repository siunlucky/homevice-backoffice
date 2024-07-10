// /components/NextBreadcrumb.tsx
'use client';

import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NextBreadcrumb = ({
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className="">
      <nav className="flex " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-gray-700 hover:text-primary-600"
            >
              <svg
                className="w-5 h-5 mr-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>

          {pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`;
            let itemLink = capitalizeLinks
              ? link[0].toUpperCase() + link.slice(1, link.length)
              : link;
            return (
              <React.Fragment key={index}>
                {pathNames.length > 0 && separator}
                <li>
                  <div className="flex items-center">
                    <Link
                      href={href}
                      className={`ml-1 ${
                        activeClasses ? activeClasses : 'text-gray-700'
                      } hover:text-primary-600 md:ml-2`}
                    >
                      {itemLink}
                    </Link>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default NextBreadcrumb;
