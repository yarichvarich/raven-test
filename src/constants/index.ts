import { ICurrency } from '@src/types';

export const nameRegex = /^[a-zA-Z\s]{2,}$/;
export const addressRegex = /\S+/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const displayedItemsCount = 18;

export const supportedCurrencies: ICurrency[] = [
  { convertionRate: 41.24, label: 'UAH' },
  { convertionRate: 1, label: 'USD' },
  { convertionRate: 0.92, label: 'EUR' },
];
