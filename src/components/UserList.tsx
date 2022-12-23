import React, { ReactNode, useState } from 'react';
import UserItem from './UserItem';
import { IUser } from '../Interfaces/IUser';

interface UserListProps {
  edit: (post: IUser) => void,
  remove: (post: IUser) => void,
  users: IUser[],
  title: string,
}

const UserList = ({edit, remove, users, title}: UserListProps) => {
  return users.length
  ? (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <div>
        {
          users.map((user) => {
            return (
              <UserItem key={user.id} edit={edit} remove={remove} number={user.id || 0} user={user}/>
            );
          })
        }
      </div>
    </div>
  )
  : (
    <h1 style={{textAlign: 'center'}}>Users are not found!</h1>
  );
};

export default UserList;