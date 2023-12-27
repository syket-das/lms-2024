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
import { useUserStore } from '@/store/userStore';
import toast from 'react-hot-toast';

const Page = () => {
  const { allUsers, users } = useUserStore((state) => state);

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <ClientOnly>
      <div>
        <div className="flex justify-end my-4">
          <Button
            onClick={() => {
              toast.success('User can be added from register page. ');
            }}
          >
            Add User
          </Button>
        </div>
        <DataGrid
          rows={users}
          columns={[
            { field: 'username', headerName: 'User Name', flex: 1 },
            { field: 'name', headerName: 'Name', flex: 1 },
            { field: 'email', headerName: 'Email', flex: 1 },
            {
              field: 'phone',
              headerName: 'Phone Number',
              flex: 1,
            },

            { field: 'role', headerName: 'Role', flex: 1 },
          ]}
          slots={{ toolbar: QuickSearchToolbar }}
        />
      </div>
    </ClientOnly>
  );
};

export default Page;

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
