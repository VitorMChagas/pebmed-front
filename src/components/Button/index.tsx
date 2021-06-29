import React from 'react';

import { MainButton } from './styles';

export interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const Button: React.FC<ButtonProps> = (props) => {
  return(
    <MainButton>
      {props.text}
    </MainButton>
  )
}

export default Button;