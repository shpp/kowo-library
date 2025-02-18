import {Box, Image} from "@chakra-ui/react";

interface Props {
    url: string;
}

export default function ImageMarker({ url }: Props) {
    return <Box w='50px' h='50px' bgColor='#F2F8E9' p='10px' boxSizing='border-box' borderRadius='50%'>
        <Box w='30px' h='30px'>
            <Image src={url} alt='books' />
        </Box>
    </Box>
}