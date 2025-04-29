import { auth } from '@/shared/config/auth';
import { AccountTabs } from '@/widgets/account-tabs';
import { Breadcrumb, Stack } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

export default async function Account() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }
  return (
    <Stack gap={'16px'} p={{ base: '16px', lg: '24px 108px 64px 108px' }} minH={{ base: 'none', lg: '624px' }}>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link _hover={{ textDecoration: 'underline' }} color={'black'} href="/">
              Головна
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator color={'black'} />
          <Breadcrumb.Item>
            <Breadcrumb.Link _hover={{ textDecoration: 'underline' }} color={'black'} href="/account">
              Кабінет користувача
            </Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <AccountTabs />
    </Stack>
  );
}
