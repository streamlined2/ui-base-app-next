export function getPersistentValue(key, defaultValue) {
    let string = localStorage.getItem(key);
    if (string == null) {
        return defaultValue;
    }
    try {
        let value = JSON.parse(string);
        return value;
    } catch (error) {
        return defaultValue;
    }
}

export function updatePersistentValue(key, value) {
    if (value === null || value === undefined) {
        localStorage.removeItem(key);
    }
    let string = JSON.stringify(value);
    localStorage.setItem(key, string);
}

export function getDefaultValue(value, defaultValue) {
    if (value === null || value === undefined) {
        return defaultValue;
    }
    return value;
}