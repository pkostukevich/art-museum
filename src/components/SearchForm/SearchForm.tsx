import React, { useEffect } from 'react';
import { useDebounce } from '@hooks/useDebounce';
import { useForm } from 'react-hook-form';
import './SearchForm.scss';

const SearchForm: React.FC = () => {
  const { register, watch } = useForm();
  const searchTerm: string = watch('search');
  const debouncedSearchTerm: string = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        {...register('search')}
        placeholder="Search Art, Artist, Work..."
      />
    </form>
  );
};

export default SearchForm;
