import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useUserStore } from '@/store/userStore';
import { UserAccountNav } from './UserAccount';

const AuthButton = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

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
