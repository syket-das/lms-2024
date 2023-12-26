'use client';
import { Icons } from '@/components/Icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const url = 'http://localhost:8000';

  const login = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(url + '/api/v1/auth/login', {
        email,
        password,
      });
      if (data) {
        toast.success('Logged in successfully!');
        localStorage.setItem('token', data.token);
        setUser();
        router.push('/');
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login();
  };

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/register"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Register
      </Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to sign in
            </p>
          </div>
          <div className={cn('grid gap-6')}>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="eg. saiketsd23@gmail.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="********"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className={cn(buttonVariants())}
                  disabled={loading}
                >
                  {loading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign In
                </button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking Sign in, you agree to our{' '}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
