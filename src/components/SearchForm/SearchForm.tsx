import './SearchForm.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDebounce } from '@hooks/useDebounce';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

type SearchFormInputs = {
  search?: string;
};

type SearchFormProps = {
  onSearch: (term: string) => void;
};

const schema: Yup.ObjectSchema<
  SearchFormInputs,
  Yup.AnyObject,
  Yup.AnyObject,
  ''
> = Yup.object().shape({
  search: Yup.string(),
});

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: yupResolver(schema),
  });

  const searchTerm: string | undefined = watch('search');
  const debouncedSearchTerm: string | undefined = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) {
      onSearch(debouncedSearchTerm || '');
    }
  }, [debouncedSearchTerm, onSearch]);

  const onSubmit: SubmitHandler<SearchFormInputs> = (data) => {
    onSearch(data.search || '');
  };

  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="search-form__input"
        type="text"
        {...register('search')}
        placeholder="Search Art..."
      />
      {errors.search && <p className="error">{errors.search.message}</p>}
    </form>
  );
};

export default SearchForm;
