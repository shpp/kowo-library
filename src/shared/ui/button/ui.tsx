import {Button as ChakraButton, ButtonProps} from '@chakra-ui/react';
import {ReactNode} from "react";

type KowoButtonProps = {
  children: ReactNode;
  color?: ButtonProps['color'];
  backgroundColor?: ButtonProps['backgroundColor'];
}

export const KowoButton = ({children, color = 'kowo.500', backgroundColor = 'white'}: KowoButtonProps) => {
    return (
      <ChakraButton
        variant="subtle"
        rounded='lg'
        color={color}
        fontSize='16px'
        fontWeight='semibold'
        backgroundColor={backgroundColor}
      >
          {children}
      </ChakraButton>
    )
}