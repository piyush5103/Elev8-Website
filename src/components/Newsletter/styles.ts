import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Newsletter = styled.section`
  ${tw`bg-gray-100 border-indigo-100 rounded-lg`};

  max-width: 768px;
  margin: 2em auto;
  background: white;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
`;

export const Form = styled.div`
  ${tw`flex flex-col items-center justify-center mx-auto mt-4`};
`;

export const Input = styled.input`
  ${tw`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal mb-3`};
`;
