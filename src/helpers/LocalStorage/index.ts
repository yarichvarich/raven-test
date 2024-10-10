const storage = window.localStorage;

class LocalStorage {
  static get<T>(key: string) {
    const storedItem = storage.getItem(key);
    try {
      if (storedItem) {
        const value = JSON.parse(storedItem);
        return value as T;
      }
    } catch (error) {
      console.log(error);
      return undefined;
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
