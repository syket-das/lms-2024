'use client';
import React from 'react';
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

const page = () => {
  return (
    <ClientOnly>
      <div>
        <div className="flex justify-end my-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add a new category</DialogTitle>
                <DialogDescription>
                  Enter the name of the category you want to add.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter category name"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mx-auto">
          <DataGrid
            rows={[
              { id: 1, col1: 'Hello', col2: 'World' },
              { id: 2, col1: 'XGrid', col2: 'is Awesome' },
              { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
            ]}
            columns={[
              { field: 'col1', headerName: 'Column 1', width: 150 },
              { field: 'col2', headerName: 'Column 2', width: 150 },
            ]}
            slots={{ toolbar: QuickSearchToolbar }}
          />
        </div>
      </div>
    </ClientOnly>
  );
};

export default page;
