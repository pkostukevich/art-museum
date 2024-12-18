import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { DEBOUNCE_DELAY } from '@constants/debounce';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDebounce } from '@hooks/useDebounce';
import * as Yup from 'yup';

import { ErrorMessage, SearchFormContainer, SearchInput } from './styled';

type SearchFormInputs = {
  search?: string;
};

type SearchFormProps = {
  onSearch: (term: string) => void;
  placeholder?: string;
};

const schema: Yup.ObjectSchema<
  SearchFormInputs,
  Yup.AnyObject,
  Yup.AnyObject,
  ''
> = Yup.object().shape({
  search: Yup.string(),
});

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, placeholder }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: yupResolver(schema),
  });

  const searchTerm: string | undefined = watch('search');
  const debouncedSearchTerm: string | undefined = useDebounce(
    searchTerm,
    DEBOUNCE_DELAY,
  );

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) {
      onSearch(debouncedSearchTerm || '');
    }
  }, [debouncedSearchTerm, onSearch]);

  const onSubmit: SubmitHandler<SearchFormInputs> = (data) => {
    onSearch(data.search || '');
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
      <SearchInput
        type="text"
        {...register('search')}
        placeholder={placeholder}
      />
      {errors.search && <ErrorMessage>{errors.search.message}</ErrorMessage>}
    </SearchFormContainer>
  );
};

export default SearchForm;
