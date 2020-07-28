import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from "framer-motion";

export const Footer = styled.footer`
  ${tw`py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full mb-4`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const Link = motion.custom(styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  `);
  
  export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 mb-2`};
  transition: 400ms ease-in-out;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: white;
  color: #667eea;
  
  :hover {
    color: white;
    transition: 150ms ease-in-out;
    background: #667eea;
  }
  `;
