'use client';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

export function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 flex w-full items-start justify-between px-5 py-5 text-white mix-blend-difference md:px-10 md:py-8">
      <NavbarBrand />
      <NavbarList />
    </nav>
  );
}
