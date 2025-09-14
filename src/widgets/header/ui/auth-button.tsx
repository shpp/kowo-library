import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';

import { ModalWindow } from '@/shared/ui/modal-window';
import { GoogleLogIn } from '@/features/google-log-in';
import CabinetIcon from '@/shared/assets/icons/cabinet-icon';

type CabinetButtonProps = {
  onClick?: () => void;
};

const CabinetButton: React.FC<CabinetButtonProps> = ({ onClick }) => (
  <Button
    gap={{ base: '8px', lg: 0 }}
    p="4px 8px"
    rounded="lg"
    height="100%"
    color="#030712"
    variant="ghost"
    flexDirection={{
      base: 'row',
      lg: 'column',
    }}
    onClick={onClick}
  >
    <Box hideFrom="lg">
      <CabinetIcon width="24px" height="24px" />
    </Box>
    <Box hideBelow="lg">
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
        <CabinetButton
          onClick={() => {
            router.push('/cabinet');
          }}
        />
      ) : (
        <ModalWindow trigger={<CabinetButton />} content={<GoogleLogIn />} />
      )}
    </HStack>
  );
}
