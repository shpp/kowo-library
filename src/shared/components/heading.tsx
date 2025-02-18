import { Heading as ChakraHeading } from '@chakra-ui/react'
import {CSSProperties, ReactNode} from "react";

interface Props {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
    marginBottom?: CSSProperties['marginBottom']
    children: ReactNode
}

export default function Heading({size, marginBottom = '0', children}: Props) {
    return <ChakraHeading size={size} color='#FC4141' marginBottom={marginBottom}>{children}</ChakraHeading>
}