                       // Make a Function which works similarly to map function of array.

                                  // *****Map function Demonstartion*****

/** Map function is a predefined function which access all the element of array, execute given function on them and return a new array as a result without affecting the original array */

// let originalArray = [2,4,1,5,3];
// let newArray = originalArray.map(function (item){
//     item =  item*2
//     return item;
// })

// console.log("Original Array: ", originalArray);
// console.log("New Array: ", newArray);
//----------------------------------------------------------------------/** Example No. 1 **/



// let arr = [2,7,4,8,3]
// let array_02 = arr.map((item)=>item +2);

// console.log(arr);
// console.log(array_02);
//----------------------------------------------------------------------/** Example No. 2 **/




//----------------------------------------------------------------------/** Our Custom Function **/

/** For making a custom map function.
 * We have to make a predefined function which can access all the element of th array.
 * To achieve this we can create a loop starting from 0 index to last index of array inside our function.
 * Create a blank array.
 * Inside the loop push our result into that array.
 * 
 */

Array.prototype.riteshMAp = function (element, i){
let newArray = [];
for (let i=0; i<this.length; i++){
    newArray.push(element(this[i], i))
}
return newArray;
}

let array = [2,4,1,5,3];
let array_01 = array.riteshMAp(function(item, i){
    if (item%2 ==0){
        item = item * 2;
    return item ;}
})
console.log(array_01);
console.log(array);