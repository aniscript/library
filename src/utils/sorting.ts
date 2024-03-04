export const compareString = (a: string, b: string) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
};

export const compareNumber = (a: number, b: number) => {
  return b - a;
};
