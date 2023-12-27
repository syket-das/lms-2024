'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { useBookTransactionStore } from '@/store/useBookTransactionStore';
import { useUserStore } from '@/store/userStore';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import React, { useEffect } from 'react';

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <GridToolbar />
      <GridToolbarQuickFilter />
    </Box>
  );
}

const Page = () => {
  const { user, setUser } = useUserStore((state) => state);
  const { myTransactions, myBookTransactions } = useBookTransactionStore(
    (state) => state
  );

  useEffect(() => {
    setUser();
    myTransactions();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        {/* ts-ignore */}

        <h1 className="text-3xl font-bold mt-4">Profile</h1>
        <p className="text-gray-500">
          You can update your account information here.
        </p>

        <form className="flex flex-col gap-8 mt-20 mb-10">
          <Input type="text" value={user?.name}></Input>
          <Input type="text" value={user?.username}></Input>
          <Input type="text" value={user?.email}></Input>
          <Input type="text" value={user?.phone}></Input>

          <Button disabled type="submit">
            Update account
          </Button>
        </form>

        <div className="mx-auto">
          <h3 className="text-2xl font-semibold mb-2">History</h3>
          <DataGrid
            rows={myBookTransactions}
            columns={[
              {
                field: 'bookName',
                headerName: 'Book Name',
                valueGetter: (params: any) => params?.row?.book?.name,
                flex: 1,
              },
              {
                field: 'userName',
                headerName: 'User Name',
                flex: 1,
                valueGetter: (params: any) => params?.row?.user?.username,
              },
              {
                field: 'dullName',
                headerName: 'Full Name',
                flex: 1,
                valueGetter: (params: any) => params?.row?.user?.name,
              },
              {
                field: 'fromDate',
                headerName: 'From Date',
                flex: 1,
                valueGetter: (params: any) =>
                  (params?.row?.fromDate).slice(0, 10),
              },

              {
                field: 'toDate',
                headerName: 'To Date',
                flex: 1,
                valueGetter: (params: any) =>
                  `${(params?.row?.toDate).slice(0, 10)}`,
              },

              {
                field: 'returnDate',
                headerName: 'Return Date',
                flex: 1,
                valueGetter: (params: any) =>
                  `${params?.row?.returnedAt?.slice(0, 10) || 'Not returned'}`,
              },
            ]}
            style={{
              height: 400,
              width: '100%',
            }}
            slots={{ toolbar: QuickSearchToolbar }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
