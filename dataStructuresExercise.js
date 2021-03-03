//1a
const jedi = [];
console.log(jedi);

//1b
jedi[0] = "Luke";
console.log(jedi);

//1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

//1d 
jedi.unshift("Yoda");
console.log(jedi);

//1e
console.log(jedi[1]);

//1f
jedi.pop();
console.log(jedi);

//1g
jedi.shift();
console.log(jedi);

//2a
const sithLords = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
];
console.log(sithLords);

//2b
const imperialOfficers = [
    "Grand Moff Tarkin", 
    "Orson Krennic"
];
console.log(imperialOfficers);

//2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

//2d
console.log(starWarsVillians.slice(0, 2));

//3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3P0",
    assassin: "IG-88"
};

//3b
console.log(droids["astromech"]);

//3c
console.log(droids.protocol);

//3d
droids["assassin"] = "IG-11";
console.log(droids["assassin"]);

//BONUS 
//4
console.log(starWarsVillians[0][6]);

//5
console.log(sithLords.slice(-2, -1));
//FOUND THIS ANSWER ON THE COMPLETED VERSION

//6a
const starWarsMovies = [
    {
    episodeOne: "The Phantom Menace",
    episodeTwo: "Attack of the Clones",
    episodeThree: "Revenge of the Sith"
    },
    {
    episodeFour: "A New Hope",
    episodeFive: "The Empire Strikes Back",
    episodeSix: "Return of the Jedi"
    },
    {
    episodeSeven: "The Force Awakens",
    episodeEight: "The Last Jedi",
    episodeNine: "The Rise of Skywalker"
    }
];

//6b
starWarsMovies.splice(1, 2, "Solo", "Rogue One");
console.log(starWarsMovies);

//I didn't use (1, 0) in mine but I got the same result. I tried the way in the completed version and it produces the same result and shows the 2nd and 3rd OBJECTS in the result. I just left what I had originally answered! 
