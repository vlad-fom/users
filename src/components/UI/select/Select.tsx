import React from 'react';
import { IUser } from '../../../Interfaces/IUser';

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  defaultValue: string;
  options: Option[];
  value: string;
  onChange: (sort: keyof IUser) => void;
}

const Select = (props: SelectProps) => {
  return (
    <select
      style={{margin: '0 10px'}}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value as keyof IUser)}
    >
      <option disabled value="">{props.defaultValue}</option>
      {props.options.map((option) => {
        return(
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;