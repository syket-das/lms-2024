'use client';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useUserStore } from '@/store/userStore';
import { UserAccountNav } from './UserAccount';

const AuthButton = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser();
    }
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        <Button>
          <Link href="/login">Join now</Link>
        </Button>
      ) : (
        <UserAccountNav />
      )}
    </>
  );
};

export default AuthButton;
