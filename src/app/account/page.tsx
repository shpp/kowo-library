import { StyledTabs } from '@/shared/ui/styled-tabs';
import { HereIsEmpty } from '@/widgets/here-is-empty';
import { Breadcrumb, Heading, HStack, Stack } from '@chakra-ui/react';

const myBooksTabsData = [
  {
    title: 'На руках',
    value: 'onHands',
    component: <HereIsEmpty type="hereIsEmpty" />,
  },
  {
    title: 'Повернуті',
    value: 'returned',
    component: <HereIsEmpty type="unread" />,
  },
];

const pageTabs = [
  {
    title: 'Мої книги',
    value: 'books',
    component: (
      <Stack gap={'16px'} width={'100%'}>
        <Heading fontSize={'40px'} fontWeight={600}>
          Мої Книги
        </Heading>
        <StyledTabs items={myBooksTabsData} type="horizontal" />
      </Stack>
    ),
  },
  {
    title: 'Обране',
    value: 'chosen',
    component: <></>,
  },
  {
    title: 'Особисті дані',
    value: 'data',
    component: <></>,
  },
  {
    title: 'Мій внесок',
    value: 'contribution',
    component: <></>,
  },
];

export default function Account() {
  return (
    <Stack gap={'16px'} p={{ base: '16px', lg: '24px 108px' }}>
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
      <HStack gap={{ base: '16px', lg: '120px' }} alignItems={'start'}>
        <StyledTabs items={pageTabs} type="vertical" />
      </HStack>
    </Stack>
  );
}
