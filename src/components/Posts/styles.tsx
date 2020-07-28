import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`};
`;

export const Post = styled.div`
  ${tw`w-full sm:w-1/2 p-3`};
`;

export const Card = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden`};

  background: white;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  transition: transform 150ms ease-in-out;
  
  :hover {
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    transition: transform 400ms ease-in-out;
  }
`;

export const Content = styled.div`
  ${tw`p-4 text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Description = styled.p``;

export const Date = styled.h3`
  ${tw`text-xs text-indigo-500`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-indigo-900 bg-teal-200 rounded-md px-2 py-1 mr-2`}
`;
