class SessionStorageManager {
  static setItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T>(key: string): T | null {
    const item: string | null = sessionStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }
}

export default SessionStorageManager;
