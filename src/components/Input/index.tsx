import React, { useRef, useEffect } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';

interface Props extends InputProps {
  name: string;
}

function InputMask({ name, ...rest }: Props) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <ReactInputMask
        className="inputClass"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <span
          style={{
            display: 'flex',
            position: 'absolute',
            color: 'rgb(255, 0, 0)',
            fontSize: '0.7rem',
            marginTop: '-21px',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default InputMask;
