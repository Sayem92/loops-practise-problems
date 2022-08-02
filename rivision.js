// string type 
var bottlename = '7up';
// numeric type
var bottlePrice= 120 ;
// boolean type
var isExpensive = true;
// array type 

var tableitems =['pen', 'book', 'mouse', 'keyboard', 'fan']
console.log(tableitems);

// 4 a ki ace dektam
var item = tableitems[4];
console.log(item);


// nam change replace
tableitems[4] = 'cosma';
console.log(tableitems[4]);


// jare kujray index koto number a ace
var penIndex = tableitems.indexOf('pen');
console.log(penIndex);

// added 
tableitems.push('watch', 'light');
console.log(tableitems);

// remove 
tableitems.pop();
console.log(tableitems);


//conditions
if(tableitems.length > 4){
    console.log('true');
}
else if(tableitems[3] == 'pen'){
    console.log('paici');
}
else{
    console.log('kicu  nai'); 
}