import db from '../../utils/db';

type Book = {
  name?: string | null;
  category?: string | null;
};

export const getBooks = async ({ name, category }: Book) => {
  if (name && category) {
    return await db.book.findMany({
      where: {
        name: {
          contains: name,
        },
        Category: {
          name: {
            contains: category,
          },
        },
      },
      include: {
        Category: true,
        BookTransaction: true,
      },
    });
  } else if (name) {
    return await db.book.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      include: {
        Category: true,
        BookTransaction: true,
      },
    });
  } else if (category) {
    return await db.book.findMany({
      where: {
        Category: {
          name: {
            contains: category,
          },
        },
      },
      include: {
        Category: true,
        BookTransaction: true,
      },
    });
  }

  return await db.book.findMany({
    include: {
      Category: true,
      BookTransaction: true,
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
