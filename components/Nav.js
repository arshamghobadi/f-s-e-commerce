import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  HiOutlineBuildingStorefront,
  HiOutlineHome,
  HiOutlineCog6Tooth,
  HiOutlineQueueList,
  HiOutlineArchiveBox,
} from 'react-icons/hi2';
const Nav = () => {
  const inActiveLink = 'flex gap-1 p-1 items-center';
  const activeLink = inActiveLink + ' bg-white text-blue-900 rounded-l-lg';
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className=" text-white p-4 pr-0">
      <Link className="flex items-center mb-4 mr-4 gap-1" href="/">
        <HiOutlineBuildingStorefront />
        <span>EcommerceAdmin</span>
      </Link>
      <nav className="flex flex-col gap-2 ">
        <Link
          className={pathname === '/' ? activeLink : inActiveLink}
          href={'/'}
        >
          <HiOutlineHome />
          Dashboard
        </Link>
        <Link
          className={pathname.includes('/products') ? activeLink : inActiveLink}
          href={'/products'}
        >
          <HiOutlineCog6Tooth />
          Products
        </Link>
        <Link
          className={pathname.includes('/orders') ? activeLink : inActiveLink}
          href={'/orders'}
        >
          <HiOutlineQueueList />
          Orders
        </Link>
        <Link
          className={pathname.includes('/settings') ? activeLink : inActiveLink}
          href={'/settings'}
        >
          <HiOutlineArchiveBox />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;
