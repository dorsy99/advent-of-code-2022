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

    data.forEach(function(sack){
        //split in half    
        var a = sack.slice(0,sack.length/2)
        var b = sack.slice(sack.length/2,sack.length)
        console.log(sack)

        //find the duplicate
        var foundItem = "";
        var items = a.split("");
        items.forEach(function(i){
            if (b.indexOf(i) != -1) {
                foundItem = i;
            }
        })
        console.log(foundItem);

        //Find priority
        var priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log("Value: " + (parseInt(priority.indexOf(foundItem))+1).toString()); 
        sumOfValues += parseInt(priority.indexOf(foundItem))+1;
    })
    console.log(sumOfValues)
}