// retrieve data from localStorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// save data to localStorage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}