export const setStorageItem = (key: string, state, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
    state[key] = data;
}

export const getStorageItem = (key: string) => {
    const item = JSON.parse(<string>localStorage.getItem(key));
    return item || null;
}

export const removeStorageItem = (key: string, state) => {
    localStorage.removeItem(key);
    state[key] = null;
}
