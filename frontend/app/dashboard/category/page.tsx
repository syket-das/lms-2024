'use client';
import { CategoryCard } from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCategoryStore } from '@/store/useCategoryStore';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const Page = () => {
  const { categories, setCategories, createCategory } = useCategoryStore(
    (state) => state
  );

  const [name, setName] = React.useState('');

  const handleSubmit = async (e: any) => {
    if (!name) {
      toast.error('Please enter a name');
      return;
    }

    e.preventDefault();
    await createCategory({ name });
    setName('');
    setCategories();
    toast.success('Category created successfully');
  };

  useEffect(() => {
    setCategories();
  }, []);

  return (
    <div>
      <div className="flex justify-end">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSubmit} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="my-4 flex flex-wrap justify-start items-center gap-4">
        {categories.map((item: any) => (
          <CategoryCard key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
