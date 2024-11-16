import { useEffect } from 'react';

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useClickOutside;
