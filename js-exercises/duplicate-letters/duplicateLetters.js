
function duplicateLetters(...args) {
  var obj={};
  args = args.toString();
  var maxOccurrence = 1;
for(x = 0, length = args.length; x < length; x++) {
    var l = args.charAt(x)
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
}
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]>1) {
        var temp = new Array( obj[key]+ 1 ).join( key ).length;
      if(temp >maxOccurrence)
        {
          maxOccurrence = temp;
        }
    }
}
  return (maxOccurrence>1)?maxOccurrence:false;
}


export {
  duplicateLetters,
};
