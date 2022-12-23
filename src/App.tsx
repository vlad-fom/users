import React, { useEffect, useState } from 'react';
import UserService from './API/UserService';
import UserFilter from './components/UserFilter';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Button from './components/UI/button/Button';
import Loader from './components/UI/Loader/Loader';
import Modal from './components/UI/Modal/Modal';
// import Pagination from './components/UI/pagination/Pagination';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useFetching } from './hooks/useFetching';
import { useUsers } from './hooks/useUsers';
import { IUser } from './Interfaces/IUser';
import { getPagesCount } from './utils/pages';
import './styles/App.css';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);
  const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
    const response = await UserService.getAllUsersOnPage(limit, page);
    setTotalCount(parseInt(response.headers['x-total-count'] as string));
    setUsers(response.data as IUser[]);
  });
  
  useEffect(() => {
    (async () => await fetchUsers())();
  }, [page, limit]);

  const createUser = async (user: IUser) => {
    setUsers([...users, user]);
    setModal(false);
    await UserService.addUser(user);
  }

  const editUser = async (user: IUser) => {
    console.log(user)
  }

  const removeUser = async (user: IUser) => {
    setUsers(users.filter((u) => u.id !== user.id));
    await UserService.deleteUser(user.id || 0);
  }

  const onSizeChange = (current: number) => {
    setPage(current);
  }

  const onShowSizeChange = (current: number, pageSize: number) => {
    setPage(current);
    setLimit(pageSize);
  };

  return (
    <div className='App'>
      <Button onClick={async () => await fetchUsers()}>Get users</Button>
      <Button onClick={() => setModal(true)}>Create user</Button>
      <Button onClick={async () => {
        console.log((await UserService.getAllUsers()).data)
      }}>Show all users</Button>
      <Button onClick={async () => {
        console.log((await UserService.addUser(
          {
            email: 'string',
            access: false,
            lastName: 'string',
            birthDate: 'string',
            firstName: 'string',
          } as IUser
        )))
      }}>Add button</Button>
      <Modal visible={modal} setVisible={setModal}>
        <UserForm create={createUser}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <UserFilter filter={filter} setFilter={setFilter}/>
      {userError &&
        <div>
          <h1 style={{textAlign: 'center'}}>Something went wrong</h1>
          <h3 style={{textAlign: 'center'}}>{userError}</h3>
        </div>
      }
      {isUsersLoading
        ? <Loader/>
        :
        <div>
          <Pagination
            onChange={onSizeChange}
            onShowSizeChange={onShowSizeChange}
            current={page}
            pageSize={limit}
            defaultPageSize={limit}
            total={totalCount}           
          />
          <UserList
            edit={editUser}
            remove={removeUser}
            users={sortedAndSearchedUsers}
            title={'Users'}
          />
        </div>
      }
    </div>
  );
};

export default App;