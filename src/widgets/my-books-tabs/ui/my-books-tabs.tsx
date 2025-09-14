import { AccountTable } from '@/features/account-table';
import { Tabs } from '@chakra-ui/react';
import React from 'react';

const onHandsTableData = {
  type: 'onHands',
  header: ['Назва', 'Видана', 'Позичена до'],
  data: [
    {
      id: 1,
      cover: '',
      name: 'The Great Gatsby',
      dateOfIssuance: '15.03.2025',
      lentTo: '15.06.2025',
    },
    {
      id: 2,
      cover: '',
      name: '1984',
      dateOfIssuance: '10.02.2025',
      lentTo: '10.05.2025',
    },
    {
      id: 3,
      cover: '',
      name: 'To Kill a Mockingbird',
      dateOfIssuance: '20.01.2025',
      lentTo: '20.04.2025',
    },
    {
      id: 4,
      cover: '',
      name: 'Pride and Prejudice',
      dateOfIssuance: '05.04.2025',
      lentTo: '05.07.2025',
    },
    {
      id: 5,
      cover: '',
      name: 'The Catcher in the Rye',
      dateOfIssuance: '25.03.2025',
      lentTo: '25.06.2025',
    },
  ],
};

const returnedTableData = {
  type: 'returned',
  header: ['Назва', 'Статус', 'Видана', 'Повернута'],
  data: [
    {
      id: 1,
      cover: '',
      name: 'Moby-Dick',
      status: 'Returned',
      dateOfIssuance: '10.11.2024',
      dateReturned: '10.03.2025',
    },
    {
      id: 2,
      cover: '',
      name: 'War and Peace',
      status: 'Returned',
      dateOfIssuance: '15.12.2024',
      dateReturned: '15.02.2025',
    },
    {
      id: 3,
      cover: '',
      name: 'The Odyssey',
      status: 'Returned',
      dateOfIssuance: '01.01.2025',
      dateReturned: '01.04.2025',
    },
    {
      id: 4,
      cover: '',
      name: 'Crime and Punishment',
      status: 'Returned',
      dateOfIssuance: '20.10.2024',
      dateReturned: '20.01.2025',
    },
    {
      id: 5,
      cover: '',
      name: 'Jane Eyre',
      status: 'Returned',
      dateOfIssuance: '05.12.2024',
      dateReturned: '05.03.2025',
    },
  ],
};

const myBooksTabsData = [
  {
    title: 'На руках',
    value: 'onHands',
    component: <AccountTable {...onHandsTableData} />,
  },
  {
    title: 'Повернуті',
    value: 'returned',
    component: <AccountTable {...returnedTableData} />,
  },
];

export const MyBooksTabs = () => {
  return (
    <Tabs.Root defaultValue={myBooksTabsData[0].value} variant={'line'}>
      <Tabs.List width={'fit-content'}>
        {myBooksTabsData.map((item, index) => (
          <Tabs.Trigger
            fontFamily={'Inter'}
            fontWeight={600}
            fontSize={'14px'}
            lineHeight={'150%'}
            color={'rgba(3, 7, 18, 1)'}
            key={index}
            value={item.value}
          >
            {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {myBooksTabsData.map((item, index) => (
        <Tabs.Content key={index} value={item.value}>
          {item.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
