import React, { useState } from 'react';
import s from './InputText.module.css';

export const InputText = React.memo(props => {
  const { value, onChange, type, ...restProps } = props;

  const [title, setTitle] = useState(value);
  const onChangeHandler = e => {
    setTitle(e.currentTarget.value);
  };
  const saveNewValueInState = () => {
    onChange(title);
  };

  return (
    <>
      <input type={type} onChange={onChangeHandler} className={s.myInput} onBlur={saveNewValueInState} {...restProps} value={title} />
    </>
  );
});
