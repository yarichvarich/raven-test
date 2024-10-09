import { createContext } from 'react';
import { action, makeAutoObservable, observable } from 'mobx';
import { ICar, IOrderItem } from '@src/types';
import { LocalStorage } from '@src/helpers';

class RootStore {
  @observable count: number = 1;
  @observable order: IOrderItem[] = LocalStorage.get<IOrderItem[]>('order') ?? [];

  constructor() {
    makeAutoObservable(this);
  }

  @action addItemToCart = (item: ICar) => {
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

  @action removeItemFromCart = (item: ICar) => {
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
}

const store = new RootStore();

const ctx = createContext(store);

export { store, ctx as StoreContext };
