import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full mb-4`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 bg-white mb-2`};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transform: scale(1);
  transition: transform 400ms ease-in-out;

  :hover {
    transform: scale(1.2);
    ${tw`flex items-center justify-center w-10 h-10 text-white mb-2 bg-indigo-500`};
    transition: transform 150ms ease-in-out;

  }
`;
