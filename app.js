var tab = [10, 4, 2, 1, 11, 45];

function diffBig2 () {
  
var firstBiggest = Math.max.apply(null, tab);
// console.log(firstBiggest)
var index = tab.indexOf(firstBiggest);
tab.splice(index, 1)
// console.log(tab)

var secondBiggest = Math.max.apply(null, tab);
// console.log(secondBiggest)
var result = firstBiggest - secondBiggest;

return(result);
}

diffBig2();
