var a = [5 ,7 , 12, 19, 25];
let findElement = (arr,el) => {
    const index = arr.findIndex((item) => { return item == el });
    return index == -1 ? null : index
}
console.log(findElement(a,25));