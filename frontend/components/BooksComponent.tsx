'use client';
import { useBookStore } from '@/store/useBookStore';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const BooksComponent = () => {
  const books = useBookStore((state) => state.books);
  const setBooks = useBookStore((state) => state.setBooks);

  React.useEffect(() => {
    setBooks();
  }, [setBooks]);

  return (
    <div className="container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {books.map((book: any, index: any) => (
            <div key={index} className="m-2">
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '10px',
                  height: index % 2 === 0 ? '350px' : '450px',
                }}
              />
              <div className="flex justify-between">
                <p className="text-lg font-bold ml-2">
                  {book?.name?.length > 20
                    ? book.name.slice(0, 20) + '...'
                    : book.name}
                </p>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default BooksComponent;
