'use client';
import {
  Button,
  Dialog,
  Field,
  Flex,
  Heading,
  RatingGroup,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const commentSchema = z.object({
  rate: z.number().min(1).max(5),
  comment: z.string().max(300, 'Не більше 300 символів'),
});

type Inputs = z.infer<typeof commentSchema>;

const defaultValues: Inputs = {
  rate: 0,
  comment: '',
};

export const CreateComment = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: defaultValues,
    resolver: zodResolver(commentSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data: unknown) => console.log(data);

  return (
    <Flex
      bgColor={'white'}
      width={{ base: '100%', lg: '853px' }}
      borderRadius={'8px'}
      maxH={'95dvh'}
      overflowY={'auto'}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Flex flexDir={'column'} gap={'24px'} p={'32px'}>
          <Flex flexDir={'column'} gap={'8px'}>
            <Heading fontSize={'32px'} fontWeight={600}>
              Ваша думка важлива
            </Heading>
            <Text fontFamily={'Inter'} fontSize={'16px'} lineHeight={'150%'}>
              Поділіться своїми враженнями від книги. Кожне слово може надихнути
              іншого читача.
            </Text>
          </Flex>

          <Field.Root invalid={!!errors.rate}>
            <Field.Label>
              <Text
                color={'rgba(140, 143, 154, 1)'}
                fontFamily={'Inter'}
                fontSize={'12px'}
                lineHeight={'150%'}
              >
                Оцінка
              </Text>
              <Text as="span" color="red.500" ml="2px">
                *
              </Text>
            </Field.Label>
            <Controller
              control={control}
              name="rate"
              render={({ field }) => (
                <RatingGroup.Root {...field} count={5} colorPalette={'yellow'}>
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingGroup.Item key={index} index={index + 1}>
                        <RatingGroup.ItemIndicator
                          width={'32px'}
                          height={'32px'}
                        />
                      </RatingGroup.Item>
                    ))}
                  </RatingGroup.Control>
                </RatingGroup.Root>
              )}
            />
            <Field.ErrorText>{errors.rate?.message}</Field.ErrorText>
          </Field.Root>

          <Controller
            control={control}
            name="comment"
            render={({ field }) => (
              <Field.Root {...field}>
                <Field.Label>
                  <Text
                    color={'rgba(140, 143, 154, 1)'}
                    fontFamily={'Inter'}
                    fontSize={'12px'}
                    lineHeight={'150%'}
                  >
                    Відгук
                  </Text>
                </Field.Label>
                <Textarea
                  style={{ maxHeight: '160px', height: '160px' }}
                  placeholder="Залиште відгук"
                  variant="outline"
                />
              </Field.Root>
            )}
          />

          <Flex gap={'8px'} flexDir={{ base: 'column', sm: 'row' }}>
            <Button
              visual={'kowo_green'}
              w={{ base: '100%', sm: 'fit-content' }}
              type="submit"
            >
              Опубліковати
            </Button>
            <Dialog.Context>
              {store => (
                <Button
                  visual={'kowo_white'}
                  w={{ base: '100%', sm: 'fit-content' }}
                  onClick={() => store.setOpen(false)}
                  type="reset"
                >
                  Скасувати
                </Button>
              )}
            </Dialog.Context>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};
