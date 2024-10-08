export const formatToCurrency = (value: number, currency: string | undefined) => {
  if (!currency) {
    return value;
  }

  return new Intl.NumberFormat('uk', { style: 'currency', currency: currency }).format(value);
};
