import { Tabs } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface IStyledTabsProps {
  items: ITabItemData[];
}

interface ITabItemData {
  title: string;
  value: string;
  component: ReactNode;
}

export const StyledTabs: FC<IStyledTabsProps> = ({ items }) => {
  return (
    <Tabs.Root defaultValue={items[0].value} variant={'line'}>
      <Tabs.List width={'fit-content'}>
        {items.map((item, index) => (
          <Tabs.Trigger fontFamily={'Inter'} fontWeight={600} fontSize={'14px'} lineHeight={'150%'} color={'rgba(3, 7, 18, 1)'} key={index} value={item.value}>
            {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((item, index) => (
        <Tabs.Content key={index} value={item.value}>{item.component}</Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

// const tabsData = [
//   {
//     title: 'First',
//     value: 'first',
//     component: <>adas345dasd</>
//   },
//   {
//     title: 'Second',
//     value: 'second',
//     component: <>adasdasd</>
//   },
//   {
//     title: 'Third',
//     value: 'third',
//     component: <>adasfhdgjsdasd</>
//   },
// ]
