'use client';

import Navbar from '@/components/Navbar';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setUser = useUserStore((state) => state.setUser);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setUser();
    }

    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [token, setUser, isAuthenticated, router]);

  return (
    <div>
      <Navbar />
      <h1 className="">Home</h1>
    </div>
  );
}
