import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ primary, block, children }) => (
  <Styled.Button primary={primary} block={block} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    {children}
    <span>&#8594;</span>
  </Styled.Button>
);

export default Button;
