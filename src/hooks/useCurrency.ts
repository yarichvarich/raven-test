import { useCallback } from 'react';
import { formatToCurrency } from '@src/utils';
import { useStore } from './useStore';

export const useCurrency = () => {
  const { currentCurrency } = useStore();

  const formatCurrency = useCallback(
    (amountUsd: number) => {
      return formatToCurrency(amountUsd * currentCurrency.convertionRate, currentCurrency.label);
    },
    [currentCurrency]
  );

  return { formatCurrency };
};
