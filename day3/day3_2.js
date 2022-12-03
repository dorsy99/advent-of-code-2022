var fs = require('fs');
var filename = "day3/input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\n").forEach(function(i){
        dataInt.push(i);
    });
    runIt(dataInt);
})

var runIt = function(data) {
    
    var sumOfValues = 0;
    var totalset = data;

    //get 3 lines from the input

    while (data.length > 0) {
        var workingset = totalset.splice(0,3);
        console.log(workingset);

        var items = workingset[0].split("");
        var found = false;
        items.forEach(function(i){
            if (workingset[1].indexOf(i) != -1 && workingset[2].indexOf(i) != -1) {
                console.log("found " + i);
                
                
                //Find priority
                if (found == false) {
                    var priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    sumOfValues += parseInt(priority.indexOf(i))+1;
                    found = true;
                }
            }
        })
    }

    console.log(sumOfValues)
}