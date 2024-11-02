export const trimString = (str: string, resultLength: number): string => {
  return str.length > resultLength ? str.slice(0, resultLength) + '...' : str;
};
