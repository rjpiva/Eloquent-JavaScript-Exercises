
//EloquentJS Exercises - Chapter 03 
//Date.: 14 apr 2017


//Minimum
console.log('MINIMUM');

function minimum (num1, num2){
    if (num1 > num2)
        return num2;
    else
        return num1;
}

console.log('Minimum of (0,10) is ' + minimum(0,10));
console.log('Minimum of (0,-10) is ' + minimum(0,-10));

console.log();

//Recursion
console.log('RECURSION');

function isEven (num) {

    num = Math.abs(num);

    if (num == 0)
        return true;
    else if (num == 1)
        return false;
    else 
        return isEven (num - 2)   
}


console.log('Is 0 even? ' + isEven(0));
console.log('Is 1 even? ' + isEven(1));
console.log('Is 2 even? ' + isEven(2));
console.log('Is 50 even? ' + isEven(50));
console.log('Is 75 even? ' + isEven(75));
console.log('Is -1 even? ' + isEven(-1));
console.log('Is -2 even? ' + isEven(-2));

console.log();

//BEAN COUNTING - countBs
console.log("BEAN COUNTING - countBs");
function countBs (string){
    
    var numOfBs = 0;

    for(i=0; i<string.length; i++){
        if (string.charAt(i) == 'B')
            numOfBs ++;
    }
    return numOfBs;
}

console.log('BBC has '+ countBs('BBC') + ' Bs');
console.log('Big Brother Brazil has ' + countBs('Big Brother Brazil') + ' Bs');
console.log('Bring your own beers has ' + countBs('Bring your own beers') + ' Bs');

console.log();

//BEAN COUNTING - countChar
console.log("BEAN COUNTING - countChar");
function countChar (string, char){
    
    var numOfChar = 0;

    for(i=0; i<string.length; i++){
        if (string.charAt(i) == char)
            numOfChar ++;
    }
    return numOfChar;
}

console.log('kakkerlak has ' + countChar('kakkerlak','k') + ' "k"s');
console.log('Big Brother Brazil has ' + countChar('Big Brother Brazil','i') + ' "i"s');
console.log('Bring your own beers has ' + countChar('Bring your own beers', 'r') + ' "r"s');