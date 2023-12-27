'use client';

import BooksComponent from '@/components/BooksComponent';
import CarouselComponent from '@/components/CarouselComponent';
import FilterComponent from '@/components/FilterComponent';
import Navbar from '@/components/Navbar';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setUser = useUserStore((state) => state.setUser);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser();
    }

    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <Navbar />
      <div className="mb-28">
        <CarouselComponent />
      </div>
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold my-4 text-center">Welcome To LMS</h1>
        <p className="text-center text-lg">
          Explore the world of books and learn new things everyday.
        </p>
      </div>
      <FilterComponent />
      <BooksComponent />

      <div className="mb-20"></div>
    </div>
  );
}
