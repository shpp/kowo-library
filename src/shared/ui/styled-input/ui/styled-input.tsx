import { Field, Input, InputGroup, InputProps, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface IStyledInputProps {
  title: string;
  icon?: ReactNode;
  placeholder?: string;
  type: 'text' | 'email' | 'tel';
  isRequired?: boolean;
  errorText?: string;
  field: InputProps;
}

export const StyledInput: FC<IStyledInputProps> = ({
  title,
  field,
  placeholder,
  type,
  errorText,
  isRequired,
  icon,
}) => {
  return (
    <Field.Root>
      <Field.Label
        fontSize={'12px'}
        fontWeight={400}
        lineHeight={'150%'}
        fontFamily={'Inter'}
        color={'rgba(140, 143, 154, 1)'}
      >
        {title}
        {isRequired && (
          <Text as="span" color="red.500" ml="2px">
            *
          </Text>
        )}
      </Field.Label>
      <InputGroup startElement={icon && icon}>
        <Input
          {...field}
          type={type}
          placeholder={placeholder}
          p={'8px 12px'}
          pl={icon ? '40px' : '12px'}
          rounded={'8px'}
          border={'1px solid'}
          borderColor={errorText ? 'red.500' : 'rgba(212, 213, 217, 1)'}
          fontFamily={'Inter'}
          fontSize={'16px'}
          fontWeight={400}
          lineHeight={'150%'}
          color={'rgba(26, 32, 53, 1)'}
        />
      </InputGroup>
      {errorText && (
        <Field.HelperText color="red.500" fontSize="12px" mt="2px">
          {errorText}
        </Field.HelperText>
      )}
    </Field.Root>
  );
};
