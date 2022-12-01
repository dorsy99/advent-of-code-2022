var fs = require('fs');
var filename = "day1/input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\r\n").forEach(function(i){
        dataInt.push(i);
    });
    runIt(dataInt);
})

var runIt = function(data) {
    var elves = [];
    var curElf = 0;
    data.forEach(element => {
        if (element !== '') {
            curElf = curElf + (parseInt(element))
        } else {
            elves.push(curElf);
            curElf = 0;
        }
    });
    
    
    console.log(elves.sort((a,b) => a - b)[elves.length-1])
}