import db from '../../utils/db';

export const getCategories = async () => {
  return await db.category.findMany({
    orderBy: {
      id: 'desc',
    },
  });
};

export const getCategory = async (id: any) => {
  return await db.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
};

export const createCategory = async (data: any) => {
  return await db.category.create({
    data,
  });
};
