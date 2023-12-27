import db from '../../utils/db';

export const getBookTransactions = async () => {
  return await db.bookTransaction.findMany({
    orderBy: {
      id: 'desc',
    },
    include: {
      book: true,
      user: true,
    },
  });
};

export const getBookTransaction = async (id: any) => {
  return await db.bookTransaction.findUnique({
    where: {
      id,
    },
    include: {
      book: true,
      user: true,
    },
  });
};

export const createBookTransaction = async (data: any) => {
  return await db.bookTransaction.create({
    data,
  });
};

export const updateBookTransaction = async (id: any, data: any) => {
  return await db.bookTransaction.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteBookTransaction = async (id: any) => {
  return await db.bookTransaction.delete({
    where: {
      id,
    },
  });
};

export const getBookTransactionByUserId = async (userId: any) => {
  return await db.bookTransaction.findMany({
    where: {
      userId,
    },
    include: {
      book: true,
      user: true,
    },
  });
};
