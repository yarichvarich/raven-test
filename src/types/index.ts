export interface ICar {
  id: number;
  image: string;
  title: string;
  startProduction?: number;
  class: string;
  price: number;
}

export interface IOrderItem {
  carInfo: ICar;
  quantity: number;
}

export interface ICurrency {
  convertionRate: number;
  label: string;
}
