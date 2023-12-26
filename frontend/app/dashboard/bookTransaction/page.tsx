'use client';
import React, { useEffect } from 'react';
import {
  DataGrid,
  GridToolbar,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import ClientOnly from '@/components/ClientOnly';
import { Box } from '@mui/material';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBookTransactionStore } from '@/store/useBookTransactionStore';
import { useBookStore } from '@/store/useBookStore';
import Select from 'react-select';
import { useUserStore } from '@/store/userStore';
import toast from 'react-hot-toast';

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
  const {
    bookTransactions,
    setBookTransactions,
    addBookTransaction,
    updateBookTransaction,
  } = useBookTransactionStore((state) => state);

  const { books, setBooks } = useBookStore((state) => state);
  const { users, allUsers } = useUserStore((state) => state);

  const activeTransactions = bookTransactions.filter((bookTransaction: any) => {
    return (
      bookTransaction?.status === 'ACTIVE' &&
      bookTransaction.returnedAt === null
    );
  });

  const completedTransactions = bookTransactions.filter(
    (bookTransaction: any) => {
      return (
        bookTransaction?.status === 'RETURNED' && bookTransaction.returnedAt
      );
    }
  );

  const [selectedBookId, setSelectedBookId] = React.useState(null);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  useEffect(() => {
    setBookTransactions();
    setBooks();
    allUsers();
  }, []);

  return (
    <ClientOnly>
      <div>
        <div className="flex justify-end my-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Issue Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Issue a book</DialogTitle>
                <DialogDescription>
                  Fill all the details to issue a book
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p className=" container text-center text-sm text-red-500">
                  Please note: Books having more then 1 copies available in
                  library can be issued and can be visible in the list.
                </p>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Book
                  </Label>
                  <div className="w-full">
                    <Select
                      className="min-w-[250px]"
                      placeholder="Select book"
                      options={books.map((book: any) => {
                        return {
                          value: book.id,
                          label: book.name,
                          image: book.image,
                        };
                      })}
                      onChange={(e: any) => setSelectedBookId(e.value)}
                      defaultValue={selectedBookId}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Username
                  </Label>
                  <div className="w-full">
                    <Select
                      className="min-w-[250px]"
                      placeholder="Select User"
                      options={users.map((user: any) => {
                        return {
                          value: user.id,
                          label: user.username,
                        };
                      })}
                      onChange={(e: any) => setSelectedUserId(e.value)}
                      defaultValue={selectedUserId}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    From
                  </Label>
                  <div className="w-full">
                    <Input
                      className="min-w-[250px]"
                      type="date"
                      placeholder="From Date"
                      onChange={(e: any) => setFromDate(e.target.value)}
                      value={fromDate as any}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    To
                  </Label>
                  <div className="w-full">
                    <Input
                      className="min-w-[250px]"
                      type="date"
                      placeholder="From Date"
                      onChange={(e: any) => setToDate(e.target.value)}
                      value={toDate as any}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  onClick={() => {
                    if (
                      selectedBookId === null ||
                      selectedUserId === null ||
                      fromDate === null ||
                      toDate === null
                    ) {
                      toast.error('Please fill all the details');
                      return;
                    }

                    addBookTransaction({
                      bookId: selectedBookId,
                      userId: selectedUserId,
                      type: 'BORROW',
                      fromDate: new Date(fromDate as any).toISOString(),
                      toDate: new Date(toDate as any).toISOString(),
                    });
                    window.location.reload();
                  }}
                  type="submit"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mx-auto mb-8">
          <h3 className="text-2xl font-semibold mb-2">Active Transactions</h3>
          <DataGrid
            rows={activeTransactions}
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
                field: 'Action',
                headerName: 'Action',
                flex: 1,
                renderCell: (params: any) => (
                  <Button
                    onClick={() => {
                      updateBookTransaction(params.row.id, {
                        status: 'RETURNED',
                      });
                      window.location.reload();
                    }}
                  >
                    Return
                  </Button>
                ),
              },
            ]}
            // height\

            style={{ height: 400, width: '100%' }}
            slots={{ toolbar: QuickSearchToolbar }}
          />
        </div>
        <div className="mx-auto">
          <h3 className="text-2xl font-semibold mb-2">
            Completed Transactions
          </h3>
          <DataGrid
            rows={completedTransactions}
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
                  `${(params?.row?.returnedAt).slice(0, 10)}`,
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
    </ClientOnly>
  );
};

export default Page;
