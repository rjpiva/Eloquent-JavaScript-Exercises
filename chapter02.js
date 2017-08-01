
//EloquentJS Exercises - Chapter 02  
//Date.: 08 apr 2017

//Looping a triangle
function printTriangle (n) {
    
    var line = '';

    for (i = 0; i < n; i++){
        line = line.concat('#');
        console.log(line);
    }    
}

printTriangle(7);

//FizzBuzz
function fizzBuzzFirst () {
    for (i=1; i<=100; i++){

        if (i % 3 == 0){
            console.log("Fizz");
        } else {
            if (i % 5 ==0){
                console.log("Buzz");
            } else{
                console.log(i);
            };
        };
        
    };
};


function fizzBuzzSecond () {

        var display = '';

        for (i=1; i<=100; i++){

            if (i % 3 == 0){
                display = 'Fizz';
            } else {
                if (i % 5 == 0){
                    display = 'Buzz';
                } else {
                    display = i.toString(); //Converts to string so the variable can be used in process.stdout.write method.
                };
            };

            //Test numbers that are divisible by both 3 and 5
            if (i % 5 == 0 && display == 'Fizz'){
                display = 'FizzBuzz';
            }
  
            //Prints the display in a new line every 10 numbers that are checked
            i % 10 == 0 ? process.stdout.write(display + ' \n') : process.stdout.write(display + ' ') 
    };

}

fizzBuzzSecond();

//Chess Board
function createBoard(size) {

    var boardEven = ''; // Even lines of the board
    var boardOdd  = ''; //  Odd lines of the board

    //Generates the lines, given the board size.
    for (i = 0; i < size; i++){
        i % 2 == 0 ? (boardEven = boardEven.concat('#'), boardOdd = boardOdd.concat(' ')) : 
                     (boardEven = boardEven.concat(' '), boardOdd = boardOdd.concat('#'));
    };


    var board = ''; // For general purposes, consider the first as the top line with index 0.

    //Generates the board using the pre made "even" and "odd" lines.
    for (i = 0; i < size; i++){
        i % 2 == 0 ? board = board.concat(boardEven + '\n') : board = board.concat(boardOdd + '\n');
    }
    
    console.log(board);

} 

createBoard(-1);
createBoard(2);
createBoard(3);
createBoard(4);
createBoard(5);
createBoard(6);
createBoard(7);
createBoard(8);