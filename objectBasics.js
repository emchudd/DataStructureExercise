//OBJECTS (Object is a data structure that can store multiple values. Objects stores data/values in Properties which are key value pairs.)

//Object Syntax
// {key: value}

//Object Example 1
const user = { firstName: "Emily", middleName: "Candace", lastName: "Huddleston"};

//Object Example 2
const userInfo = {
    username: "emchudd",
    firstName: "Emily",
    middleName: "Candace",
    lastName: "Huddleston",
    age: 31,
    loggedIn: true
};

//ACCESSING VALUE IN AN OBJECT
//Using Square Brackets []
console.log(userInfo ["userName"]);
console.log(userInfo["age"]);

//USING A DOT .
console.log(userInfo.firstName);
console.log(userInfo.loggedIn);

//MODIFYING/ADDING WITH AN OBJECT
const th = {
    firstName: "Tom",
    lastName: "Hanks",
    age: 64,
    amazingActor: true,
    favoriteMovie: "SavingPrivateRyan"
};

//Modifying
th["favoriteMovie"] = "Forrest Gump";
console.log(th["favoriteMovie"]);
//console.log(th);
th.favoriteMovie = "Toy Story";
console.log(th.favoriteMovie);
//console.log(th);

//Adding
th["hughestGrossingMovie"] = "Forrest Gump";
console.log(th["favoriteMovie"]);
//console.log(th);
th.favoriteMovie = "Toy Story";
console.log(th.favoriteMovie);
console.log(th);

