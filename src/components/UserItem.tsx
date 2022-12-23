import React from 'react';
import { IUser } from '../Interfaces/IUser';
import Button from './UI/button/Button';

interface UserItemProps {
  remove: (post: IUser) => void,
  edit: (post: IUser) => void,
  user: IUser,
  number: number,
}

const UserItem = (props: UserItemProps) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number}. {props.user?.firstName} {props.user?.lastName}</strong>
        <p>
          {props.user?.email}
        </p>
        <p>
          {props.user?.birthDate}
        </p>
        <p>
          {props.user?.access}
        </p>
      </div>
      <div className="post__btns">
        <Button onClick={() => props.edit(props.user)}>Edit</Button>
        <Button onClick={() => props.remove(props.user)}>Delete</Button>
      </div>
    </div>
  );
};

export default UserItem;