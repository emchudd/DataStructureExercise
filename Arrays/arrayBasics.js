// ARRAY BASICS 
// An array is data structure that can store mutiple values

//This is an empty array
let cryptids = [];
console.log(cryptids);

//This is an array of strings
cryptids = ["Bigfoot", "Hopkinsville Goblin", "Lochness Monster"];
console.log(cryptids);

//Length (Returns the amount of items in an array)
//String Example
console.log("Moth Man".length);
//Array Example
console.log(cryptids.length);

//Index 
//String Example
console.log("Chupacabra"[2]);
//Array Example
console.log(cryptids[1]);

//Changing an item in an Array using index
cryptids[1] = "Skunk Ape";
console.log(cryptids);

//Adding an item to an array using Index
//cryptids[3];
cryptids[cryptids.length] = "Jersey Devil";
console.log(cryptids);

//This is an example of an arrray with different values
const randomArray = [10, true, "Champ", "Banshee"];



