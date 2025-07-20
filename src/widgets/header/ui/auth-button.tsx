import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {Avatar, Box, Button, HStack} from '@chakra-ui/react';
import React from "react";

import { ModalWindow } from '@/shared/ui/modal-window';
import { GoogleLogIn } from '@/features/google-log-in';
import CabinetIcon from '@/shared/assets/icons/cabinet-icon';

const CabinetButton: React.FC = () => (
  <Button
    gap={{base: '8px', lg: 0}}
    p="4px 8px"
    rounded="lg"
    height="100%"
    color="#030712"
    variant="ghost"
    flexDirection={{
      base: 'row',
      lg: 'column',
    }}
  >
    <Box hideFrom='lg'>
      <CabinetIcon width="24px" height="24px" />
    </Box>
    <Box hideBelow='lg'>
      <CabinetIcon width="32px" height="32px" />
    </Box>
    Кабінет
  </Button>
);

export function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <HStack gap="4px">
      {session?.user ? (
          <Button
            gap={{base: '8px', lg: 0}}
            p="4px 8px"
            rounded="lg"
            height="100%"
            color="#030712"
            variant="ghost"
            flexDirection={{
              base: 'row',
              lg: 'column',
            }}
            onClick={() => {
              router.push('/cabinet')
            }}
          >
            <Box hideFrom='lg' width="24px" height="24px">
              <Avatar.Root size={'full'}>
                <Avatar.Fallback name={session?.user?.name ?? ''} />
                <Avatar.Image src={session?.user?.image ?? ''} />
              </Avatar.Root>
            </Box>
            <Box hideBelow='lg' width="32px" height="32px">
              <Avatar.Root size={'full'}>
                <Avatar.Fallback name={session?.user?.name ?? ''} />
                <Avatar.Image src={session?.user?.image ?? ''} />
              </Avatar.Root>
            </Box>
            Кабінет
          </Button>
      ) : (
        <ModalWindow
          trigger={<CabinetButton />}
          content={<GoogleLogIn />}
        />
      )}
    </HStack>
  );
}