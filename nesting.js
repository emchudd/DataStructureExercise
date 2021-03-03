//NESTING WITH DATA STRUCTURES

//Array Nesting
const movies = [
    ["Back To The Future", "Up"],
    ["Pacific Rim", "Treasure Of Sierra Madre"],
    [
        ["Ray", "Godfather"],
        "IT"
    ]
];

console.log(movies[0][0]); //Displays "Back To The Future"
console.log(movies[2][0][1]); //Displays "Godfather"

//Object Nesting
const fellowship = {
    theTrio: {
        legolas: "Elf",
        gimli: "Dwarf",
        aragorn: "Human"
    },
    rohan: {
        kindTheodan: "King",
        eomer: "Rider"
    }
};
console.log(fellowship["theTrio"]["gimli"]); //Displays "Dwarf"
console.log(fellowship.rohan.eomer); //Displays "Rider"

//Mix of Array and Object Nesting
const marvelHeroes = {
    withPowers: [
        "Hulk",
        "Thor",
        "Spider-man",
        "Captain America"
    ],
    withoutPowers: [
        "Hawkeye",
        "Black Widow",
        "Iron Man"
    ]
};
console.log(marvelHeroes,withPowers[3]); //Displays Captain America
console.log(marvelHeroes.withoutPowers[0]); //Displays Hawkeye



