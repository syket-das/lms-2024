'use client';
import { Overview } from '@/components/Overview';
import { RecentTransaction } from '@/components/RecentTransaction';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useBookStore } from '@/store/useBookStore';
import { useBookTransactionStore } from '@/store/useBookTransactionStore';
import { useCategoryStore } from '@/store/useCategoryStore';
import { useUserStore } from '@/store/userStore';
import { BookA } from 'lucide-react';
import React, { useEffect } from 'react';

const Page = () => {
  const { setBookTransactions, bookTransactions } = useBookTransactionStore(
    (state) => state
  );
  const { allUsers, users } = useUserStore((state) => state);
  const { categories, setCategories } = useCategoryStore((state) => state);
  const { books, setBooks } = useBookStore((state) => state);

  useEffect(() => {
    setBookTransactions();
    allUsers();
    setCategories();
    setBooks();
  }, []);

  return (
    <div className="min-w-full min-h-full">
      <div className="w-full flex flex-wrap gap-4 justify-between items-center mb-8">
        <Card className="w-full md:w-[300px]">
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <BookA className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{books.length}</div>
            <p className="text-xs text-muted-foreground">available </p>
          </CardContent>
        </Card>
        <Card className="w-full md:w-[300px]">
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Categories
            </CardTitle>
            <BookA className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories?.length}</div>
            <p className="text-xs text-muted-foreground"></p>
          </CardContent>
        </Card>
        <Card className="w-full md:w-[300px]">
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transactions
            </CardTitle>
            <BookA className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookTransactions.length}</div>
            <p className="text-xs text-muted-foreground">
              20 active transaction
            </p>
          </CardContent>
        </Card>
        <Card className="w-full md:w-[300px]">
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <BookA className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users?.length}</div>
            <p className="text-xs text-muted-foreground">
              20 new users this month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview </CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              All transactions in the past few days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransaction />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
