//Main Array Methods

const tmnt = [
   "Michaelangelo",
   "Leonardo",
   "Donatello",
   "Raphael"
];
console.log(tmnt);

//PUSH (Adds an item to the end of an array)
tmnt.push("Master Splinter");
console.log(tmnt);

//POP (Returns the value of the item at the end of an array. Pop removes the item at the end of an array.)
const splinter = tmnt.pop();
console.log(tmnt);
console.log(splinter);

//SHIFT (Returns and removes the value of the item at the beginning of an array. (AKA Item at index of Zero). Also, shift moves all remaining items in the array on space to the left.)
const mikey = tmnt.shift();
console.log(mikey);
console.log(tmnt);

//UNSHIFT (Adds a new item to the start of an array (AKA At the index of zero). Also, Unshift shifts all items in the array to the right.)
tmnt.unshift("Shredder");
console.log(tmnt);

//Const CAN be used when updating an array via array methods, but you cannot create a brand new array value for array with const variable
//tmnt = ["Casey Jones"]; <--this will not work 