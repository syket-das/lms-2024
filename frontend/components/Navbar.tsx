'use client';
import React from 'react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import AuthButton from './AuthButton';
import { useUserStore } from '@/store/userStore';
import { Button } from './ui/button';

const Navbar = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="">
      <nav className="flex items-center justify-between border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />

          <AuthButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
