import { ReactNode } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

interface Props {
  size: HeadingProps['size'];
  textAlign?: HeadingProps['textAlign'];
  children: ReactNode;
}

export const KowoHeading = ({ size, textAlign, children }: Props) => {
  return (
    <ChakraHeading size={size} color="#FC4141" textAlign={textAlign}>
      {children}
    </ChakraHeading>
  );
};
