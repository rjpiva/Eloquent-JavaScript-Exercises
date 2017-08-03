//EloquentJS Exercises - Chapter 04 
//Date.: 19 apr 2017 


//The sum of a range
console.log('THE SUM OF A RANGE');

function range(start, end, step){

  var all = [];
  
  //In case no step is informed
  if (step == undefined)
  step = 1;

  //Two loops, one for ascending ranges and another for descending ones.
  switch (step >= 0 ){
      
      //Ascending
      case true:
          for (i=start;i<=end;i+= step){
              all.push(i);
          }
          return all;
          break;

      //Descending
      case false:
          for (i=start;i>=end;i+= step){
              all.push(i);
          }
          return all;
          break;
  } 
}


function sum (arr){

    var sum = 0;

    arr.forEach(function(element) {
        sum += element; 
    });

    return sum;
}

    //Tests
    console.log("range(0  , 10) = "+ range(0,10));
    console.log("range(1  ,  1) = "+ range(1,1));
    console.log("range(-10,  1) = "+ range(-10,1));
    console.log("range(1  ,-10) = "+ range(1,-10));
    console.log("range(1,   10)  = "+ range(1, 10));
    console.log("range(1, 10, 2) = "+ range(1, 10, 2));
    console.log("range(5, 2, -1) = "+ range(5, 2, -1));
    console.log("sum(range(1, 10) = "+ sum(range(1, 10)));


//Reversing an array
console.log('\nREVERSING AN ARRAY');


function reverseArray (array){

    var reversed = [];
    for(i=0;i<array.length;i++){
        reversed[i] = array[array.length - 1 - i];
    }

    return reversed;
}

function reverseArrayInPlace (array){
    
    var buffer = 0;
    //Iterates until the middle element, not including it. Math.floor is applicable for odd array lengths
    for(i=0; i<Math.floor(array.length/2); i++){
        buffer = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = buffer;
    } 
}


//Tests
console.log(reverseArray(["A", "B", "C"]));
var arrayValues = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValues);
console.log(arrayValues);


//A List
console.log("\nA LIST");

var arr = [1,2,3,4,5];

function arrayToList (arr) {
    
    var list = null;
    
    //Reverse the array to build the list from end to start.
    reverseArrayInPlace(arr);
    arr.forEach (function(element){
        list = { value : element, rest : list}
    });

    return list;
}

function listToArray (list) {
    var arr = [];
    var i = 0;
    for (var node = list; node; node = node.rest){
        arr[i] = node.value;
        i++;
    }
    return arr;
}

/*First Trial
function prepend (element,list){
    var arr = listToArray (list);
    arr.unshift(element);
    return arrayToList(arr);
} */

//Optimized
function prepend (element, list){
    return {value : element, rest: list};
}

function nth (list, index){
    var i = 0;
    for (var node = list ; node; node = node.rest){
        if (i == index)
            return node.value;
        else   
            i++;
    }
    return undefined;
}

//Recursive form - Eloquent Javascript Official Solution
function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

list = arrayToList(arr);
console.log(listToArray(list));
console.log(prepend(7,list));
console.log(list);
console.log(nth(list,0));
console.log(nth(list,1));
console.log(nth(list,2));
console.log(nth(list,3));
console.log(nth(list,4));
console.log(nth(list,5));

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//Deep comparison
console.log("\nDEEP COMPARISON");

function deepEqual (var1, var2){ 

    // In case we are dealing with two objects (arrays are objects) different than null.
    if (typeof var1 == typeof var2 && 
        typeof var1 == "object" && 
        var1 != null && 
        var2 != null){

        // Checks if both objects have the same ammount of properties
        if (Object.keys(var1).length != Object.keys(var2).length){
            return false;
        }

        // Checks if the properties of the second object are equal to the first
        for (var prop1 in var1){
            if (!var2.hasOwnProperty(prop1))
                return false;
        }

        // Checks if both objects have the same values for the same properties
        for (var prop1 in var1){
            if (!deepEqual(var1[prop1],var2[prop1]))
                return false;
        }

        return true;

    // Anything else that is not an object    
    } else if (var1 === var2){
        return true;
    }

    // Two values that aren't equal by identity
    return false;
}

//Tests

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true