'use client';
import { Icons } from '@/components/Icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';

const Page = () => {
  const router = useRouter();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setUser = useUserStore((state) => state.setUser);
  const [loading, setLoading] = React.useState(false);

  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cPassword, setCPassword] = React.useState('');

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const url = 'http://98.70.38.17:8000';

  const register = async () => {
    setLoading(true);

    if (password !== cPassword) {
      toast.error('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(url + '/api/v1/auth/register', {
        name,
        username,
        phone,
        email,
        password,
      });
      if (data) {
        toast.success('User registered successfully!');
        localStorage.setItem('token', data.token);
        setUser();
        router.push('/');
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register();
  };

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <div className={cn('grid gap-6')}>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label className="" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="eg. Syket Das"
                    type="text"
                    autoComplete="name"
                    autoCorrect="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="" htmlFor="userName">
                    User Name
                  </Label>
                  <Input
                    id="userName"
                    placeholder="eg. syketsd"
                    type="text"
                    autoComplete="userName"
                    autoCorrect="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="eg. name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="" htmlFor="phone">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="eg. +91 8100156406"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="phone"
                    autoCorrect="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="*********"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="" htmlFor="cPassword">
                    Confirm Password
                  </Label>
                  <Input
                    id="cPassword"
                    placeholder="*********"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="cPassword"
                    autoCorrect="off"
                    value={cPassword}
                    onChange={(e) => setCPassword(e.target.value)}
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
                  Sign Up
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
            By clicking continue, you agree to our{' '}
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
