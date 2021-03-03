//OTHER ARRAY METHODS
//Concat (Concatenates two arrays into one array)
const theHobbit = [
    "An Unexpected Journey",
    "The Desolation of Smaug",
    "The Battle of the Five Armies"
];
const lotr = [
    "The Fellowship of the Ring",
    "The Two Towers",
    "Return of the King"
];
const allLOTR = theHobbit.concat(lotr);
console.log(allLOTR);

//IndexOf (Returns the array index position of the value entered)
//Example of indexOf on a string
console.log("Sauron".indexOf("S"));
//Example of indexOf on an array
console.log(allLOTR.indexOf("The Two Towers")); 

//Includes (Determines if an array includes a specific value). Returns a boolean value (true/false).
console.log(allLOTR.includes("The Two Towers")); //true
console.log(allLOTR.includes("Sauron")); //false

//Reverse (Reverses the order of the items in the array. Sets the new order as the new value of the array.)
all.LOTR.reverse();
console.log(allLOTR);

//Slice (Returns a specified section of a string or array. First number determines starting index. Second number determines the stopping point. Stops before second number/index (AKA Does not include a second number)).
//Example of Slice on a String
console.log("Gandalf".slice(0,4));
//Example of Slice on an Array
//console.log(allLOTR);
//If a second number is not included, then slice will return the item at the starting index as well as the items that follow.
console.log(allLOTR.slice(3));
//console.log(allLOTR.slice(3,6));

//Splice (Removes, Replaces, or adds items to an array.)
//First position determines the starting index. Second position determines how many array items to remove. Third position determines the values being set for that/those position(s).

//Syntax for Splice
//array.splice(startingIndex, numberofIndexesToRemove, addedItemValues)

const hobbits = ["Merry", "Frodo", "Pippin", "Sam"];

//Removing with Splice
hobbits.splice(2,2);
console.log(hobbits);

//Replacing with Splice
hobbits.splice(1, 1, "Bilbo", "Smeagol");
console.log(hobbits);

//Adding with Splice
hobbits.splice(3, 0, "Deagol");
console.log(hobbits);
hobbits.splice(2, 0, "Scooby-Doo");
console.log(hobbits);

