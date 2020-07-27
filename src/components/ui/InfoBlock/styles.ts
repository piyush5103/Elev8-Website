import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg`};
  ${({ center }) => center && tw`items-center`};

  margin: 1em 1em;
  background: white;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-semibold`};
`;

export const Content = styled.p`
  ${tw`mt-1`};
`;
