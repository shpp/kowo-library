import { Tabs } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface IStyledTabsProps {
  items: ITabItemData[];
  type: 'horizontal' | 'vertical';
}

interface ITabItemData {
  title: string;
  value: string;
  component: ReactNode;
}

export const StyledTabs: FC<IStyledTabsProps> = ({ items, type }) => {
  if (type === 'horizontal') {
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
          <Tabs.Content key={index} value={item.value}>
            {item.component}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    );
  } else {
    return (
      <Tabs.Root orientation="vertical" variant="plain" defaultValue={items[0].value} gap={{ base: '16px', lg: '120px' }}>
        <Tabs.List gap={'16px'} maxW={'210px'} minW={'210px'}>
          {items.map((item, index) => (
            <Tabs.Trigger
              key={index}
              color={'black'}
              fontFamily={'Podkova'}
              fontSize={'20px'}
              lineHeight={'24px'}
              fontWeight={600}
              bgColor={'rgba(247, 248, 248, 1)'}
              p={'8px'}
              rounded={'8px'}
              gap={'8px'}
              _hover={{ bgColor: 'rgba(242, 248, 233, 1)' }}
              value={item.value}
            >
              {item.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {items.map((item, index) => (
          <Tabs.Content key={index} value={item.value}>
            {item.component}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    );
  }
};
