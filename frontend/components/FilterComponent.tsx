'use client';
import { useBookStore } from '@/store/useBookStore';
import React, { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Input } from './ui/input';
import { useCategoryStore } from '@/store/useCategoryStore';

const FilterComponent = () => {
  const categories = useCategoryStore((state) => state.categories);
  const setCategories = useCategoryStore((state) => state.setCategories);

  const books = useBookStore((state) => state.books);
  const setBooks = useBookStore((state) => state.setBooks);
  const filterBooks = useBookStore((state) => state.filterBooks);

  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState([]);

  useEffect(() => {
    filterBooks({
      name: search,
      category: category ? category : null,
    });
  }, [search, category]);

  useEffect(() => {
    setCategories();
  }, []);

  return (
    <div className="container my-8">
      <div className="flex justify-between gap-4">
        <div className="flex">
          <Input
            className="md:w-[400px]"
            placeholder="Search for a book"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <Select onValueChange={(value) => setCategory(value as any)}>
          <SelectTrigger className="w-[110px]">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Books</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              {categories.map((category: any, index: any) => (
                <SelectItem value={category.name} key={index}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterComponent;
