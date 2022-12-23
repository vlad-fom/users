import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

interface Filter {
  sort: string;
  query: string;
}

interface UserFilterProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const UserFilter = ({filter, setFilter}: UserFilterProps) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder='Search...'
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Sort by'
        options={[
          { value: 'id', name: 'By number' },
          { value: 'firstName', name: 'By first name' },
          { value: 'lastName', name: 'By last name' },
          { value: 'email', name: 'By email' },
          { value: 'birthDate', name: 'By birthdate' },
          { value: 'access', name: 'By access' },
        ]}
      />
    </div>
  );
};

export default UserFilter;