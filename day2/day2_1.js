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
    Scores:
    X = 1
    Y = 2
    Z = 3

    Outcome:
    A beats Z
    B beats Y
    C beats X

    Y beats C
    X beats B
    Z beats A (maybe wrong, soz)

    Loss = 0
    Draw = 3
    Win = 6
    */

    var score = 0;

    data.forEach(function(el){
        var op = el.split(" ")[0];
        var me = el.split(" ")[1];



        //add the score of played hand
        console.log("HAND: " + op + " " + me);
        if (me == "X") {
            score+=1;
        } else if (me == "Y") {
            score+=2;
        } else if (me == "Z") {
            score+=3;
        }

        if (op == "A" && me=="X" || op=="B"&&me=="Y" || op=="C"&&me=="Z") { //draw
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
    })

    console.log(score);


}