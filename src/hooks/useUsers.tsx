import { useMemo } from "react";
import { IUser } from "../Interfaces/IUser";

export const useSortedUsers = (users: IUser[], sort: string): IUser[] => {
  const sortedUsers = useMemo(() => {
    return sort
      ? [...users].sort((a, b) => typeof (a[sort as keyof IUser] || '') === 'number'
        ? (a[sort as keyof IUser] as number) - (b[sort as keyof IUser] as number)
        : (a[sort as keyof IUser] || '').toString().localeCompare((b[sort as keyof IUser] || '').toString())
      )
      : users;
  }, [sort, users]);
  return sortedUsers;
}

export const useUsers = (users: IUser[], sort: string, query: string): IUser[] => {
  const sortedUsers = useSortedUsers(users, sort);
  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter((user) => 
      (user.firstName || '').toLowerCase().includes(query.toLowerCase())
      ||
      (user.lastName || '').toLowerCase().includes(query.toLowerCase())
      ||
      (user.birthDate || '').toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedUsers]);

  return sortedAndSearchedUsers;
}