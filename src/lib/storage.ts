
export const saveToLocalStorage = (key: string, value: any): void => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
};

export const getFromLocalStorage = <T>(key: string): T | null => {
    try {

        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) as T : null;

    } catch (error) {
        console.error("Error retrieving from localStorage", error);
        return null;
    }
};

export const removeFromLocalStorage = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing from localStorage", error);
    }
};