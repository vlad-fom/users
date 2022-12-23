import React, { useState } from 'react';
import { IUser } from '../Interfaces/IUser';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

interface ICreate {
  create: (newUser: IUser) => void
}

const UserForm = ({create}: ICreate) => {

  const [user, setUser] = useState({
    email: '',
    access: false,
    lastName: '',
    birthDate: '',
    firstName: '',
  });

  function addNewUser(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const newUser = {
      ...user, id: Date.now()
    }
    create(newUser);
    setUser({
      email: '',
      access: false,
      lastName: '',
      birthDate: '',
      firstName: '',
    });
  }

  return (
    <form>
        <Input
          value={user.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, firstName: e.target.value})}
          type='text'
          placeholder='User name'
        />
        <Input
          value={user.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, lastName: e.target.value})}
          type='text'
          placeholder='User last name'
        />
        <Input
          value={user.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, email: e.target.value})}
          type='text'
          placeholder='User email'
        />
        <Input
          value={user.birthDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, birthDate: e.target.value})}
          type='text'
          placeholder='User birthdate'
        />
        <Button onClick={addNewUser}>Create user</Button>
      </form>
  );
};

export default UserForm;

