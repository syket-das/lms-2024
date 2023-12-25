import db from '../../utils/db';

export const getBooks = async () => {
  return await db.book.findMany({
    orderBy: {
      id: 'desc',
    },
  });
};

export const getBook = async (id: any) => {
  return await db.book.findUnique({
    where: {
      id,
    },
    include: {
      Category: true,
      BookTransaction: true,
    },
  });
};

export const createBook = async (data: any) => {
  return await db.book.create({
    data,
  });
};

export const updateBook = async (id: any, data: any) => {
  return await db.book.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteBook = async (id: any) => {
  return await db.book.delete({
    where: {
      id,
    },
  });
};
