import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-4 border border-teal-300 text-indigo-900 rounded-md`};

  ${({ primary }) => (primary ? tw`bg-teal-300` : tw`text-indigo-600`)};

  ${({ block }) => block && tw`w-full`};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`);
