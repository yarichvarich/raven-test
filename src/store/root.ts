import { createContext } from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { ICar, ICurrency, IOrderItem } from '@src/types';
import { LocalStorage } from '@src/helpers';
import { supportedCurrencies } from '@src/constants';

class RootStore {
  @observable order: IOrderItem[] = LocalStorage.get<IOrderItem[]>('order') ?? [];
  @observable formModalOpened: boolean = false;

  @observable userName: string = '';
  @observable userAddress: string = '';
  @observable userEmail: string = '';

  @observable currentCurrency: ICurrency = supportedCurrencies[1];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentCurrency = (currency: ICurrency) => {
    this.currentCurrency = currency;
  };

  setUserName = (name: string) => {
    this.userName = name;
  };

  setUserAddress = (address: string) => {
    this.userAddress = address;
  };

  setUserEmail = (email: string) => {
    this.userEmail = email;
  };

  addItemToCart = (item: ICar) => {
    const isInOrder = !!this.order.find(orderItem => orderItem.carInfo.id === item.id);

    if (isInOrder) {
      this.order = this.order.map(orderItem => {
        if (orderItem.carInfo.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else return orderItem;
      });
    } else {
      this.order = [...this.order, { carInfo: item, quantity: 1 }];
    }

    LocalStorage.set('order', [...this.order]);
  };

  removeItemFromCart = (item: ICar) => {
    const itemQuantity = this.order.find(orderItem => orderItem.carInfo.id === item.id)?.quantity;

    if (itemQuantity) {
      this.order = this.order
        .map(orderItem => {
          if (orderItem.carInfo.id === item.id) {
            return { ...orderItem, quantity: orderItem.quantity - 1 };
          } else return orderItem;
        })
        .filter(orderItem => orderItem.quantity !== 0);
    }
  };

  changeCarQuantity = (id: number, newQuantity: number) => {
    this.order = this.order
      .map(order => {
        if (order.carInfo.id === id) {
          return { ...order, quantity: newQuantity };
        }
        return order;
      })
      .filter(order => order.quantity > 0);
  };

  setFormModalOpen = (value: boolean) => {
    this.formModalOpened = value;
  };

  get overallQuantity(): number {
    return this.order.reduce((accumulator, order) => accumulator + order.quantity, 0);
  }

  get totalPrice(): number {
    return this.order.reduce(
      (accumulator, order) => accumulator + order.quantity * order.carInfo.price,
      0
    );
  }
}

const store = new RootStore();

const ctx = createContext(store);

export { store, ctx as StoreContext };
