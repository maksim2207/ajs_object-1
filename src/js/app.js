export default function orderProps(obj, setOrder) {
    const prop = [];
    const data = [];

    for (const key in obj) {
        if (setOrder.includes(key)) {
            const index = setOrder.indexOf(key);
            prop.splice(index, 0, { key, value: obj[key] });
        } else {
            data.push({ key, value: obj[key] });
        }
    }
    data.sort((a, b) => (a.key > b.key ? 1 : -1));
    return [...prop, ...data];
}
