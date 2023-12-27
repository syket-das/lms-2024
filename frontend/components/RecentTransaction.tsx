'use client';
import { useBookTransactionStore } from '@/store/useBookTransactionStore';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useEffect } from 'react';

export function RecentTransaction() {
  const { bookTransactions, setBookTransactions } = useBookTransactionStore(
    (state) => state
  );
  useEffect(() => {
    setBookTransactions();
  }, []);

  return (
    <div className="space-y-8 ">
      {
        // @ts-ignore
        bookTransactions?.map((transaction: any) => (
          <div key={transaction.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>
                {
                  // @ts-ignore
                  transaction?.user?.name?.charAt(0)
                }
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {transaction?.user?.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {transaction?.user?.email}
              </p>
            </div>
            <div className="ml-auto font-medium">{transaction?.book?.name}</div>
          </div>
        ))
      }
    </div>
  );
}
