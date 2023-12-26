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
import { BookA } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div className="min-w-full min-h-full">
      <div className="w-full flex flex-wrap gap-4 justify-between items-center mb-8">
        <Card className="w-full md:w-[300px]">
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <BookA className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
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
            <div className="text-2xl font-bold">231.89</div>
            <p className="text-xs text-muted-foreground">
              20 active transaction
            </p>
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
            <div className="text-2xl font-bold">231.89</div>
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
            <div className="text-2xl font-bold">231.89</div>
            <p className="text-xs text-muted-foreground">
              20 new users this month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransaction />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
