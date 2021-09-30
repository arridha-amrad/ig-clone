export const generateNumber = (length: number): string => {
  const possible = '1234567890';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return result;
};
