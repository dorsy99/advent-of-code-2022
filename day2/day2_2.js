var fs = require('fs');
var filename = "day2/input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\r\n").forEach(function(i){
        dataInt.push(i);
    });
    runIt(dataInt);
})

var runIt = function(data) {
    /*

    Outcome:
    X = Lose
    Y = Draw
    Z = Win

    Scores:
    R = 1
    P = 2
    S = 3

    Loss = 0
    Draw = 3
    Win = 6
    */
   var win = {
    "A": "P",
    "B": "S",
    "C": "R" 
   }

   var draw = {
    "A": "R",
    "B": "P",
    "C": "S"
   }

   var lose = {
    "A": "P",
    "B": "R",
    "C": "S"
   }

    var score = 0;

    data.forEach(function(el){
        var op = el.split(" ")[0];
        var me = el.split(" ")[1];

        //outcome points:
        if (me == "Y") {
            score+=3
        } else if (me == "Z") {
            score+=6
        }

        if (me == "X") {
            me = lose[op]
            console.log("lose")
        } else if (me == "Y") {
            me = draw[op]
            console.log("draw")
        } else if (me == "Z") {
            me = win[op]
            console.log("win")
        }



        //add the score of played hand
        console.log("HAND: " + op + " " + me);
        if (me == "R") {
            score+=1;
        } else if (me == "P") {
            score+=2;
        } else if (me == "S") {
            score+=3;
        }
        /*

        if (op == "A" && me=="R" || op=="B"&&me=="P" || op=="C"&&me=="S") { //draw
            score+=3;
            console.log("Draw")
        } else if (op == "A" && me == "Y") {
            score+=6; //win
            console.log("win1")
        } else if (op == "B" && me == "Z") {
            score+=6; //win
            console.log("win2")
        } else if (op == "C" && me == "X") {
            score+=6; //win
            console.log("win3")
        }
        */
       console.log(score)
    })

    console.log(score);


}