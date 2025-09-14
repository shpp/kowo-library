import OptionsIcon from '@/shared/assets/icons/options-icon';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';
import { HereIsEmpty } from '@/widgets/here-is-empty';
import {
  Button,
  HStack,
  IconButton,
  Stack,
  Table,
  Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type AccountTableProps = {
  type: string;
  header: Array<string>;
  data: IDonatedTableData[] | ILikedReturnedTableData[] | IOnHandsTableData[];
};

interface IOnHandsTableData {
  id: number;
  cover: string;
  name: string;
  dateOfIssuance: string;
  lentTo: string;
}

interface ILikedReturnedTableData {
  id: number;
  cover: string;
  name: string;
  status: string;
  dateOfIssuance: string;
  dateReturned: string;
}

interface IDonatedTableData {
  id: number;
  cover: string;
  name: string;
  status: string;
}

export const AccountTable: FC<AccountTableProps> = ({ type, header, data }) => {
  if (data.length <= 0) {
    return (
      <>
        {type === 'onHands' && <HereIsEmpty type="hereIsEmpty" />}
        {type === 'returned' && <HereIsEmpty type="addToLiked" />}
        {type === 'liked' && <HereIsEmpty type="addToLiked" />}
        {type === 'donate' && <HereIsEmpty type="donate" />}
      </>
    );
  }
  return (
    <Stack gap={'20px'}>
      <Table.Root>
        <Table.Header>
          <Table.Row
            bgColor={'rgba(247, 248, 248, 1)'}
            borderBottom={'2px solid rgba(212, 213, 217, 1)'}
          >
            {header.map((item, index) => (
              <Table.ColumnHeader
                p={'4px 12px'}
                key={index}
                color={'rgba(102, 106, 121, 1)'}
              >
                {item}
              </Table.ColumnHeader>
            ))}
            <Table.ColumnHeader p={'4px 12px'} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {type === 'onHands' &&
            (data as IOnHandsTableData[]).map(item => (
              <Table.Row key={item.id} p={'12px'} height={'fit-content'}>
                <Table.Cell>
                  {item.cover}
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={600}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                  >
                    {item.name}
                  </Text>
                </Table.Cell>
                <Table.Cell>{item.dateOfIssuance}</Table.Cell>
                <Table.Cell>{item.lentTo}</Table.Cell>
                <Table.Cell display={'flex'} justifyContent={'center'}>
                  <IconButton
                    bgColor={'rgba(0, 0, 0, 0.06)'}
                    rounded={'6px'}
                    w={'45px'}
                    h={'33px'}
                  >
                    <OptionsIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            ))}
          {(type === 'liked' || type === 'returned') &&
            (data as ILikedReturnedTableData[]).map(item => (
              <Table.Row key={item.id} p={'12px'}>
                <Table.Cell>
                  {item.cover}
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={600}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                  >
                    {item.name}
                  </Text>
                </Table.Cell>
                <Table.Cell>{item.status}</Table.Cell>
                <Table.Cell>
                  {item.dateOfIssuance !== '' ? item.dateOfIssuance : '-'}
                </Table.Cell>
                <Table.Cell>
                  {item.dateReturned !== '' ? item.dateReturned : '-'}
                </Table.Cell>
                <Table.Cell display={'flex'} justifyContent={'center'}>
                  <IconButton
                    bgColor={'rgba(0, 0, 0, 0.06)'}
                    rounded={'6px'}
                    w={'45px'}
                    h={'33px'}
                  >
                    <OptionsIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            ))}
          {type === 'donated' &&
            (data as IDonatedTableData[]).map(item => (
              <Table.Row key={item.id} p={'12px'}>
                <Table.Cell>
                  {item.cover}
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={600}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                  >
                    {item.name}
                  </Text>
                </Table.Cell>
                <Table.Cell>{item.status}</Table.Cell>
                <Table.Cell display={'flex'} justifyContent={'center'}>
                  <IconButton
                    bgColor={'rgba(0, 0, 0, 0.06)'}
                    rounded={'6px'}
                    w={'45px'}
                    h={'33px'}
                  >
                    <OptionsIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
      <HStack
        hidden={data.length < 12}
        w={'100%'}
        justifyContent={'space-between'}
      >
        <Button visual={'kowo_white'}>Завантажити ще</Button>
        <CustomPagination count={12} page={1} pageSize={12} />
      </HStack>
    </Stack>
  );
};
