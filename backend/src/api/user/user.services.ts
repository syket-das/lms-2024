import { User } from '@prisma/client';
import db from '../../utils/db';

export const findUserByEmail = (email: string) => {
  return db.user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = (user: any) => {
  return db.user.create({
    data: user,
  });
};

export const findUserById = (id: any) => {
  return db.user.findUnique({
    where: {
      id,
    },
  });
};

export const updateUser = (id: any, body: any) => {
  return db.user.update({
    where: { id },
    data: {
      ...body,
    },
  });
};

export const allUsers = () => {
  return db.user.findMany({});
};
