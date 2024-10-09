const storage = window.localStorage;

class LocalStorage {
  static get<T>(key: string) {
    const storedItem = storage.getItem(key);
    if (storedItem) {
      const value = JSON.parse(storedItem);
      return value as T;
    }
    return undefined;
  }

  static set(key: string, value: unknown) {
    return storage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    return storage.removeItem(key);
  }

  static clear() {
    return storage.clear();
  }
}

export { LocalStorage };
