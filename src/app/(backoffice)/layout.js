'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//import Components
import DefaultButton from '@/components/button/defaultButton';
import MenuSidebar from '@/components/menuSidebar';

//import Icon
import { BiSolidDashboard } from 'react-icons/bi';
import { IoSettings } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaUserCog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

//import Images
import Logo from '../../../public/assets/image/logo-only.svg';
import NextBreadcrumb from '@/components/breadcrumbs';
import Link from 'next/link';
import Cookies from 'js-cookie';

const MainLayout = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    Cookies.remove('token');
    router.push('/login');
  };
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Link href="#" className="flex gap-2 h-10">
                <Image
                  width={0}
                  height={0}
                  src={Logo}
                  className="w-16"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-gray-500 text-xl font-semibold whitespace-nowrap ">
                  HomeVice
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between ">
          <ul className="space-y-2 font-medium">
            <li>
              <MenuSidebar
                href="/dashboard"
                icon={<BiSolidDashboard className="text-xl" />}
                title={'Dashboard'}
              />
            </li>
            <li>
              <MenuSidebar
                href="/service"
                icon={<HiMiniWrenchScrewdriver className="text-xl" />}
                title={'Service'}
              />
            </li>
            <li>
              <MenuSidebar
                href="/users"
                icon={<FaUser className="text-xl" />}
                title={'Users'}
              />
            </li>
            <li>
              <MenuSidebar
                href="/role"
                icon={<FaUserCog className="text-xl" />}
                title={'Role'}
              />
            </li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li>
              <MenuSidebar
                href="./profile"
                icon={<CgProfile className="text-xl" />}
                title={'Profile'}
              />
            </li>
            <li>
              <MenuSidebar
                href="./setting"
                icon={<IoSettings className="text-xl" />}
                title={'Setting'}
              />
            </li>
            <li>
              <DefaultButton
                title={'Logout'}
                type={'submit'}
                onClick={handleLogout}
                status={'primary'}
                size={'base'}
                full={true}
              />
            </li>
          </ul>
        </div>
      </aside>

      <div className=" sm:ml-64">
        <div className="mt-16">
          <div className="px-4 py-4 bg-white block sm:flex items-center justify-between ">
            <div className="w-full mb-1">
              <NextBreadcrumb
                separator={
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
                activeClasses="text-gray-400"
                capitalizeLinks
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
