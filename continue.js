
var numbers =[25, 36, 60, 80, 70, 20, 55, 258, 256, 552, 000, 1000]

for ( var i= 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        continue;
    }
    console.log(number);
}