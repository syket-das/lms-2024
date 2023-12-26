import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const AuthButton = () => {
  return (
    <>
      <Button>
        <Link href="/login">Join now</Link>
      </Button>
    </>
  );
};

export default AuthButton;
