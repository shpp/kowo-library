import React from 'react';
import { redirect } from 'next/navigation';
import { Container, Heading } from '@chakra-ui/react';

import { auth } from '@/shared/config/auth';

export default async function Cabinet() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <Container>
      <Heading>Кабінет {session?.user?.name}</Heading>
    </Container>
  );
}
