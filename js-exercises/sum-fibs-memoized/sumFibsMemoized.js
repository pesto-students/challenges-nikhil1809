function sumFibs(num) {
  var temp=0;
  var sumofOddFibonnaci =0;
  for(var num1 = 0, num2 = 1, temp; num2 <= num; temp = num2, num2 += num1, num1 = temp) 
 {
    sumofOddFibonnaci += num2 * (num2 % 2);
 }
  return sumofOddFibonnaci;
  //
}

function cacheFunction(sumFibs) {
  var cache = {};
  return function (n){
    if (cache[n]) {
      return cache[n]
    } else {
      var result = sumFibs(n)
      cache[n] = result
      return result;
    }
}
}

export { sumFibs, cacheFunction };
