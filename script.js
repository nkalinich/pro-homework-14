// Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 }} 
// Написать функцию convert(obj), которая получает аргументом obj. 
// Функция должна вернуть новый объект вида:
// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

let obj = { 
    x: 10, 
    y: 20, 
    inner: {x: 20, z: 30}, 
    foo2: {k: 23, p: 13},
}

function convert(obj) {
    let newObj = {};

    for(let key in obj) {
        if(typeof obj[key] === "object") {
           let newObj2 = convert(obj[key]);
           for(let innerKey in newObj2) {
                newObj[innerKey] = newObj2[innerKey];
            };
            for(let foo2Key in newObj2) {
                newObj[foo2Key] = newObj2[foo2Key];
            };
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

console.log(convert(obj));