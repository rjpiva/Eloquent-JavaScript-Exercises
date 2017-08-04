//EloquentJS Exercises - Chapter 05 
//Date.: 29 apr 2017 


//Flattening
    console.log('FLATTENING');

    function flattens (arr) {
        return arr.reduce(function (a,b){
            return a.concat(b);     
        });
    }


    // Tests
    var arrays = [[1, 2, 3], [4, 5], [6]];
    console.log(flattens(arrays));


//Mother-child age difference
    console.log("\nMOTHER-CHILD AGE DIFFERENCE");

    //Import the file ANCESTRY_FILE as a string and converts it into an array (object)
    var ANCESTRY_FILE = require("./ancestry.js");
    var ancestry = JSON.parse(ANCESTRY_FILE);

    function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
    }

    var byName = {};
    ancestry.forEach(function(person) {
    byName[person.name] = person;
    });


    //Generates an array populated with age differences
    var differenceMotherChildren = ancestry.map(function(person){
        var childBornDate = person.born;
        var motherBornDate = (byName.hasOwnProperty(person.mother) ? byName[person.mother].born : childBornDate); // "0" is assumed if the mother is not in the dataset
        return childBornDate - motherBornDate;
    });

    //Filter zeros
    differenceMotherChildren = differenceMotherChildren.filter(function filterZeros (element){
            return element !=0;
    });

    console.log(average(differenceMotherChildren));

//Historical life expectancy
    console.log("\nHISTORICAL LIFE EXPECTANCY");

/* Generates a data structure like the following
centuries{
    15 : [lifeExpectancy1, lifeExpectancy2,...];
    16 : [lifeExpectancy1, lifeExpectancy2,...];
    17 : [lifeExpectancy1, lifeExpectancy2,...];
    18 : [lifeExpectancy1, lifeExpectancy2,...]; 
} */

var centuries = {};

ancestry.forEach (function (person){
    var born = person.born;
    var died = person.died;
    var expectancy = died - born;
    var century = Math.ceil(person.died / 100);
    
    //Either push a value into an existing array or initialize a new array;
    centuries.hasOwnProperty(century) ? centuries[century].push(expectancy) : centuries[century] = [expectancy] ;
})


console.log(centuries);

//Calculates the average for each array;
for (var century in centuries){
    centuries[century] = average(centuries[century]);
}
console.log(centuries);


//Every and then some
    console.log('EVERY AND THEN SOME');

    // If "action" returns true for every element of arr, the "every" function also returns true. 
    function every (arr, action){
        for(var i = 0; i < arr.length; i++){
            if (!action(arr[i])){
                return false;
            };
        }
        return true;
    }

    // If "action" returns true for any element of arr, the "some" function also returns true. 
    function some (arr, action){
        for(var i = 0; i < arr.length; i++){
            if (action(arr[i])){
                return true;
            }
        }
        return false;
    }

    //Tests

    console.log(every([NaN, NaN, NaN], isNaN));
    // → true
    console.log(every([NaN, NaN, 4], isNaN));
    // → false
    console.log(some([NaN, 3, 4], isNaN));
    // → true
    console.log(some([2, 3, 4], isNaN));
    // → false