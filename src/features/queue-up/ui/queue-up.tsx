'use client';
import {Button, Center, Checkbox, Dialog, Flex, Heading, Text} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import kowoBg from '@/shared/assets/backgrounds/kowo-bg-green.png';
import {z} from 'zod';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {StyledInput} from '@/shared/ui/styled-input';
import {BookApiResponse} from '@/entities/kowo-book/ui/kowo-book';

const userInfoSchema = z.object({
  name: z.string().min(1, "Ім'я обов’язкове"),
  email: z.string().email('Невірний формат пошти').min(1, 'Пошта обов’язкова'),
  phone: z
    .string()
    .min(1, 'Телефон обов’язковий')
    .regex(/^[0-9]+$/, 'Дозволені тільки цифри'),
  policy: z.boolean(),
});

type Inputs = z.infer<typeof userInfoSchema>;

const defaultValues: Inputs = {
  name: '',
  email: '',
  phone: '',
  policy: false,
};

async function makeBooking(bookingData: { bookId: number, person: Omit<Inputs, 'policy'>  }) {
  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/books`, {
    method: 'POST',
    body: JSON.stringify(bookingData)
  });
}

export const QueueUp = ({book, type = 'book'}: { book: BookApiResponse; type?: 'book' | 'queue' }) => {
  const [booked, setBooked] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    defaultValues: defaultValues,
    resolver: zodResolver(userInfoSchema),
  });
  
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setError(null);
    try {
      const res = await makeBooking({bookId: book.id, person: {email: data.email, name: data.name, phone: data.phone}});
      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          setBooked(true)
        } else {
          setBooked(false)
          setError('Щось пішло не так, спробуйте ще раз')
        }
      } else {
        setBooked(false)
        setError('Щось пішло не так, спробуйте ще раз')
      }
    } catch {
      setBooked(false)
      setError('Щось пішло не так, спробуйте ще раз')
    }
  };
  
  return (
    <Flex bgColor={'white'} width={{base: '100%', lg: '853px'}} borderRadius={'8px'}
          flexDir={{base: 'column', md: 'row'}} maxH={'95dvh'} overflowY={'auto'}>
      <Flex
        borderRadius={{base: '8px 8px 0px 0px', md: '8px 0px 0px 8px'}}
        bgImage={`url(${kowoBg.src})`}
        bgPos={'center'}
        bgSize={'cover'}
        width={{base: '100%', md: '40%'}}
        flexDir={'column'}
        p={'32px'}
        gap={'16px'}
      >
        <Center width={'100%'} bgColor={'rgba(0, 0, 0, 0.15)'} borderRadius={'8px'}>
          {book?.cover &&
              <Image width={100} height={100} src={book.cover} alt="" style={{width: '70%', aspectRatio: '3 / 4'}}/>}
        </Center>
        <Flex flexDir={'column'} gap={'8px'}>
          <Heading fontSize={'32px'} fontWeight={600} color={'white'}>
            {book?.name}
          </Heading>
          <Text fontFamily={'Inter'} fontSize={'20px'} lineHeight={'150%'} color={'white'}>
            {book?.authors.join(', ')}
          </Text>
        </Flex>
      </Flex>
      <Flex width={{base: '100%', md: '60%'}} p={'32px'}>
        {booked
          ? (
            <Flex width={'100%'} flexDir={'column'} gap={'24px'}>
              <Heading fontSize={'32px'} fontWeight={600}>
                {type === 'book' ? 'Забронювати книгу' : 'Стати в чергу'}
              </Heading>
              <Flex height={'100%'} alignItems={'center'} justifyContent={'center'}>
                <Text fontSize="20px" fontWeight={500}>
                  Заброньовано
                </Text>
              </Flex>
            </Flex>
          )
          : (
            <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
              <Flex flexDir={'column'} gap={'24px'}>
                <Heading fontSize={'32px'} fontWeight={600}>
                  {type === 'book' ? 'Забронювати книгу' : 'Стати в чергу'}
                </Heading>
                {error && (
                  <Text color="red.500" fontSize="14px" textAlign="center">
                    {error}
                  </Text>
                )}
                <Controller
                  name="name"
                  control={control}
                  render={({field}) => <StyledInput
                    placeholder="Введіть ваше ім'я" field={field} title="Ім'я"
                    isRequired
                    type="text" errorText={errors.name?.message}
                  />}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({field}) => <StyledInput
                    placeholder="Введіть вашу пошту" field={field} title="Пошта"
                    isRequired
                    type="email" errorText={errors.email?.message}
                  />}
                />
                <Controller
                  name="phone"
                  control={control}
                  render={({field}) => <StyledInput
                    placeholder="Введіть ваш номер" field={field} title="Номер телефону"
                    isRequired type="tel" errorText={errors.phone?.message}
                  />}
                />
                <Controller
                  name="policy"
                  control={control}
                  render={({field}) => (
                    <Checkbox.Root>
                      <Checkbox.HiddenInput/>
                      <Checkbox.Control {...field} />
                      <Checkbox.Label>
                        <Text fontFamily={'Inter'} fontSize={'14px'} lineHeight={'20px'} color={'rgba(3, 7, 18, 1)'}>
                          Я згоден з{' '}
                          <Text _hover={{textDecoration: 'underline'}} as="span" color={'rgba(41, 91, 255, 1)'}>
                            правилами
                          </Text>{' '}
                          користування
                        </Text>
                      </Checkbox.Label>
                    </Checkbox.Root>
                  )}
                />
                <Flex gap={'8px'} flexDir={{base: 'column', sm: 'row'}}>
                  <Button visual={'kowo_red'} w={{base: '100%', sm: 'fit-content'}} type="submit">
                    {type === 'book' ? 'Забронювати' : 'Стати в чергу'}
                  </Button>
                  <Dialog.Context>
                    {(store) => (
                      <Button visual={'kowo_white'} w={{base: '100%', sm: 'fit-content'}}
                              onClick={() => store.setOpen(false)} type="reset">
                        Скасувати
                      </Button>
                    )}
                  </Dialog.Context>
                </Flex>
              </Flex>
            </form>
          )
        }
      </Flex>
    </Flex>
  );
};
