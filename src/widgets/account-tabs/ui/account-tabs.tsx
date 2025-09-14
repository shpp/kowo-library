'use client';
import { AccountTable } from '@/features/account-table';
import { UserInfoForm } from '@/features/user-info-form';
import AccountBookIcon from '@/shared/assets/icons/account-tabs-icons/account-book-icon';
import AccountLikeIcon from '@/shared/assets/icons/account-tabs-icons/account-like-icon';
import AccountPresentIcon from '@/shared/assets/icons/account-tabs-icons/account-present-icon';
import AccountUserIcon from '@/shared/assets/icons/account-tabs-icons/account-user-icon';
import { MyBooksTabs } from '@/widgets/my-books-tabs';
import { Heading, Stack, Tabs, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

const likedTableData = {
  type: 'liked',
  header: ['Назва', 'Статус', 'Видана', 'Повернута'],
  data: [
    // { id: 1, cover: '', name: 'Dune', status: 'Liked', dateOfIssuance: '01.02.2025', dateReturned: '' },
    // { id: 2, cover: '', name: 'The Hobbit', status: 'Liked', dateOfIssuance: '10.03.2025', dateReturned: '' },
    // { id: 3, cover: '', name: 'Fahrenheit 451', status: 'Liked', dateOfIssuance: '15.01.2025', dateReturned: '15.03.2025' },
    // { id: 4, cover: '', name: 'Brave New World', status: 'Liked', dateOfIssuance: '20.02.2025', dateReturned: '' },
    // { id: 5, cover: '', name: 'The Alchemist', status: 'Liked', dateOfIssuance: '05.03.2025', dateReturned: '05.04.2025' },
    // { id: 6, cover: '', name: 'Dune', status: 'Liked', dateOfIssuance: '01.02.2025', dateReturned: '' },
    // { id: 7, cover: '', name: 'The Hobbit', status: 'Liked', dateOfIssuance: '10.03.2025', dateReturned: '' },
    // { id: 8, cover: '', name: 'Fahrenheit 451', status: 'Liked', dateOfIssuance: '15.01.2025', dateReturned: '15.03.2025' },
    // { id: 9, cover: '', name: 'Brave New World', status: 'Liked', dateOfIssuance: '20.02.2025', dateReturned: '' },
    // { id: 10, cover: '', name: 'The Alchemist', status: 'Liked', dateOfIssuance: '05.03.2025', dateReturned: '05.04.2025' },
    // { id: 11, cover: '', name: 'Dune', status: 'Liked', dateOfIssuance: '01.02.2025', dateReturned: '' },
    // { id: 12, cover: '', name: 'The Hobbit', status: 'Liked', dateOfIssuance: '10.03.2025', dateReturned: '' },
    // { id: 13, cover: '', name: 'Fahrenheit 451', status: 'Liked', dateOfIssuance: '15.01.2025', dateReturned: '15.03.2025' },
  ],
};

const donatedTableData = {
  type: 'donated',
  header: ['Назва', 'Статус'],
  data: [
    { id: 1, cover: '', name: 'Sapiens', status: 'Owned' },
    { id: 2, cover: '', name: 'The Road', status: 'Owned' },
    { id: 3, cover: '', name: 'East of Eden', status: 'Owned' },
    { id: 4, cover: '', name: 'The Name of the Wind', status: 'Owned' },
    { id: 5, cover: '', name: 'Never Let Me Go', status: 'Owned' },
  ],
};

const pageTabs = [
  {
    title: 'Мої книги',
    icon: AccountBookIcon,
    value: 'books',
    component: (
      <Stack gap={'16px'} width={'100%'}>
        <Heading fontSize={'40px'} fontWeight={600}>
          Мої Книги
        </Heading>
        <MyBooksTabs />
      </Stack>
    ),
  },
  {
    title: 'Обране',
    icon: AccountLikeIcon,
    value: 'chosen',
    component: (
      <Stack gap={'24px'} width={'100%'}>
        <Heading fontSize={'40px'} fontWeight={600}>
          Мої Книги
        </Heading>
        <AccountTable {...likedTableData} />
      </Stack>
    ),
  },
  {
    title: 'Особисті дані',
    icon: AccountUserIcon,
    value: 'data',
    component: <UserInfoForm />,
  },
  {
    title: 'Мій внесок',
    icon: AccountPresentIcon,
    value: 'contribution',
    component: (
      <Stack gap={'24px'} width={'100%'}>
        <Stack>
          <Heading fontSize={'40px'} fontWeight={600}>
            Мої Книги
          </Heading>
          <Text fontFamily={'Inter'} fontSize={'16px'} lineHeight={'150%'}>
            Книжки, які ви подарували бібліотеці.
          </Text>
        </Stack>
        <AccountTable {...donatedTableData} />
      </Stack>
    ),
  },
];

export const AccountTabs = () => {
  const [currentValue, setCurrentValue] = useState<string | null>(
    pageTabs[0].value
  );
  return (
    <Tabs.Root
      value={currentValue}
      onValueChange={e => setCurrentValue(e.value)}
      orientation="vertical"
      variant="plain"
      gap={{ base: '16px', lg: '120px' }}
    >
      <Tabs.List gap={'16px'} maxW={'210px'} minW={'210px'}>
        {pageTabs.map((item, index) => (
          <AccountTabsTrigger
            key={index}
            item={item}
            currentValue={currentValue}
          />
        ))}
      </Tabs.List>
      {pageTabs.map((item, index) => (
        <Tabs.Content width={'100%'} key={index} value={item.value}>
          {item.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

type IconComponent = FC<{ color: string }>;

type AccountTabsTriggerProps = {
  item: {
    value: string;
    title: string;
    icon: IconComponent;
  };
  currentValue: string | null;
};

const AccountTabsTrigger: FC<AccountTabsTriggerProps> = ({
  item,
  currentValue,
}) => {
  const { value, title, icon: Icon } = item;
  return (
    <Tabs.Trigger
      color={value === currentValue ? 'rgba(102, 165, 43, 1)' : 'black'}
      fontFamily={'Podkova'}
      fontSize={'20px'}
      lineHeight={'24px'}
      fontWeight={600}
      bgColor={
        value === currentValue
          ? 'rgba(242, 248, 233, 1)'
          : 'rgba(247, 248, 248, 1)'
      }
      p={'8px'}
      rounded={'8px'}
      gap={'8px'}
      _hover={{ bgColor: 'rgba(242, 248, 233, 1)' }}
      value={value}
    >
      <Icon
        color={value === currentValue ? 'rgba(102, 165, 43, 1)' : 'black'}
      />
      {title}
    </Tabs.Trigger>
  );
};
