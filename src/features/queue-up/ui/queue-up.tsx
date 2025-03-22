import { Button, Center, Checkbox, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import kowoBg from '@/shared/assets/backgrounds/kowo-bg-green.png';
import { z } from 'zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledInput } from '@/shared/ui/styled-input';

const userInfoSchema = z.object({
  firstName: z.string().min(1, "Ім'я обов’язкове"),
  email: z.string().email('Невірний формат пошти').min(1, 'Пошта обов’язкова'),
  phone: z
    .string()
    .min(1, 'Телефон обов’язковий')
    .regex(/^[0-9]+$/, 'Дозволені тільки цифри'),
  policy: z.boolean(),
});

type Inputs = z.infer<typeof userInfoSchema>;

const defaultValues: Inputs = {
  firstName: '',
  email: '',
  phone: '',
  policy: false,
};

export const QueueUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: defaultValues,
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data: unknown) => console.log(data);

  return (
    <Flex bgColor={'white'} width={'853px'} borderRadius={'8px'}>
      <Flex borderRadius={'8px 0px 0px 8px'} bgImage={`url(${kowoBg.src})`} bgPos={'center'} bgSize={'cover'} width={'40%'} flexDir={'column'} p={'32px'} gap={'16px'}>
        <Center width={'100%'} bgColor={'rgba(0, 0, 0, 0.15)'} borderRadius={'8px'}>
          <Image width={100} height={100} src={''} alt="" style={{ width: '70%', aspectRatio: '3 / 4' }}></Image>
        </Center>
        <Flex flexDir={'column'} gap={'8px'}>
          <Heading fontSize={'32px'} fontWeight={600} color={'white'}>
            Я бачу, вас цікавить пітьма
          </Heading>
          <Text fontFamily={'Inter'} fontSize={'20px'} lineHeight={'150%'} color={'white'}>
            Ілларіон Павлюк
          </Text>
        </Flex>
      </Flex>
      <Flex width={'60%'} p={'32px'}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Flex flexDir={'column'} gap={'24px'}>
            <Heading fontSize={'32px'} fontWeight={600}>
              Забронювати книгу
            </Heading>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <StyledInput placeholder="Введіть ваше ім'я" field={field} title="Ім'я" isRequired type="text" errorText={errors.firstName?.message} />}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => <StyledInput placeholder="Введіть вашу пошту" field={field} title="Пошта" isRequired type="email" errorText={errors.email?.message} />}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => <StyledInput placeholder="Введіть ваш номер" field={field} title="Номер телефону" isRequired type="tel" errorText={errors.phone?.message} />}
            />
            <Controller
              name="policy"
              control={control}
              render={({ field }) => (
                <Checkbox.Root>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control {...field} />
                  <Checkbox.Label>
                    <Text fontFamily={'Inter'} fontSize={'14px'} lineHeight={'20px'} color={'rgba(3, 7, 18, 1)'}>
                      Я згоден з{' '}
                      <Text _hover={{ textDecoration: 'underline' }} as="span" color={'rgba(41, 91, 255, 1)'}>
                        правилами
                      </Text>{' '}
                      користування
                    </Text>
                  </Checkbox.Label>
                </Checkbox.Root>
              )}
            />
            <Flex gap={'8px'}>
              <Button borderRadius={'8px'} bgColor={'rgba(252, 65, 65, 1)'} color={'white'} p={'8px 16px'} w={'fit-content'} type="submit">
                Забронювати
              </Button>
              <Button borderRadius={'8px'} bgColor={'white'} border={'1px solid rgba(212, 213, 217, 1)'} color={'kowo.solid'} p={'8px 16px'} w={'fit-content'} type="reset">
                Скасувати
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
