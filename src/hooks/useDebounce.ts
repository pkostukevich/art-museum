import { useEffect, useState } from 'react';

export function useDebounce(
  value: string | undefined,
  delay: number,
): string | undefined {
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>(
    value,
  );

  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return (): void => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
