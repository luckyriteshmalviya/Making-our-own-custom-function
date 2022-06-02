function riteshAccess(array, mapFunction){
    let myArr =[];
    for (let i=0; i<array.length; i++){
        let result = mapFunction(array[i], i, array)
        myArr.push(result);
    }
return myArr;
}

let arr = [2,1,3,6,4,6]

let arr_01 = riteshAccess(arr, function (currentItem, index, arrReference){
    return currentItem*2 ;
})

// console.log("original Array: ",arr)
// console.log(arr_01);

let arr_03 = ["Ritesh", 3,6,2,7]
let arr_04 = riteshAccess(arr_03, function(element){
    return element*3;
})

console.log("original Array: ",arr_03)
console.log(arr_04);
