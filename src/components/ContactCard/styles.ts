import styled from 'styled-components';
import tw from 'tailwind.macro';

export const ContactCard = styled.section`
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
  ${tw`bg-white focus:outline-none border border-gray-200 rounded-md py-2 px-4 block w-full appearance-none leading-normal mb-3`};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);

  :focus {
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  }
`;

export const TextArea = styled.textarea`
  ${tw`bg-white focus:outline-none border border-gray-200 rounded-md py-2 px-4 block w-full appearance-none leading-normal mb-3`};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);

  :focus {
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  }
`;
