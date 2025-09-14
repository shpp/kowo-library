'use client';
import React from 'react';
import { Button, Grid, Heading, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import TelegramIcon from '@/shared/assets/icons/user-form-icons/telegram-icon';
import EmailIcon from '@/shared/assets/icons/user-form-icons/email-icon';
import PhoneIcon from '@/shared/assets/icons/user-form-icons/phone-icon';
import ViberIcon from '@/shared/assets/icons/user-form-icons/viber-icon';
import { StyledInput } from '@/shared/ui/styled-input';

const userInfoSchema = z.object({
  firstName: z.string().min(1, "Ім'я обов’язкове"),
  secondName: z.string().min(1, 'Прізвище обов’язкове'),
  email: z.string().email('Невірний формат пошти').min(1, 'Пошта обов’язкова'),
  phone: z
    .string()
    .min(1, 'Телефон обов’язковий')
    .regex(/^[0-9]+$/, 'Дозволені тільки цифри'),
  telegram: z.string().optional(),
  viber: z.string().optional(),
});

type Inputs = z.infer<typeof userInfoSchema>;

const defaultValues: Inputs = {
  firstName: '',
  secondName: '',
  email: '',
  phone: '',
  telegram: '',
  viber: '',
};

export const UserInfoForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: defaultValues,
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Stack maxW={'604px'} gap={'24px'}>
      <Heading fontSize={'40px'} fontWeight={600} color={'rgba(3, 7, 18, 1)'}>
        Особисті дані
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid mb={'40px'} templateColumns="repeat(2, 1fr)" gap="6">
          <Controller
            name="secondName"
            control={control}
            render={({ field }) => (
              <StyledInput
                placeholder="Введіть ваше прізвище"
                field={field}
                title="Прізвище"
                isRequired
                type="text"
                errorText={errors.secondName?.message}
              />
            )}
          />
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <StyledInput
                placeholder="Введіть ваше ім'я"
                field={field}
                title="Імʼя"
                isRequired
                type="text"
                errorText={errors.firstName?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <StyledInput
                icon={<EmailIcon />}
                placeholder="Введіть вашу пошту"
                field={field}
                title="Пошта"
                isRequired
                type="email"
                errorText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <StyledInput
                icon={<PhoneIcon />}
                placeholder="Введіть ваш номер телефону"
                field={{
                  ...field,
                  onChange: e => {
                    const value = e.target.value;
                    if (/^[0-9]*$/.test(value)) {
                      field.onChange(value);
                    }
                  },
                }}
                title="Телефон"
                isRequired
                type="tel"
                errorText={errors.phone?.message}
              />
            )}
          />
          <Controller
            name="telegram"
            control={control}
            render={({ field }) => (
              <StyledInput
                icon={<TelegramIcon />}
                placeholder="Введіть ваш логін"
                field={field}
                title="Telegram"
                type="text"
                errorText={errors.telegram?.message}
              />
            )}
          />
          <Controller
            name="viber"
            control={control}
            render={({ field }) => (
              <StyledInput
                icon={<ViberIcon />}
                placeholder="Введіть ваш логін"
                field={field}
                title="Viber"
                type="text"
                errorText={errors.viber?.message}
              />
            )}
          />
        </Grid>
        <Button visual={'kowo_green'} type="submit">
          Зберегти зміни
        </Button>
      </form>
    </Stack>
  );
};
