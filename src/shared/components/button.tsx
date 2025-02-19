import {Button as ChakraButton} from '@chakra-ui/react';
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const styles = {
    width: 'max-content',
    padding: '8px 16px',
    fontWeight: 600,
    fontSize: '16px',
    color: '#66A52B',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: 'none'
}

export default function Button({children}: Props) {
    return <ChakraButton css={styles}>
        {children}
    </ChakraButton>
}