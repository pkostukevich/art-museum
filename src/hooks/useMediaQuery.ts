import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener: () => void = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return (): void => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
