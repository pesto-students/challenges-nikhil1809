
function lastIndexOf(...args) {
  var lastIndexOf = -1; // default assignment of -1 if element is not found
  var numbertoSearch = args[0]; // first arguement is the element to search
  var arrayToSearch = args[1];
  if(!arrayToSearch)
  {
    return -1; //array is empty,  further execution is not required
  }
  var length = arrayToSearch.length; // find the length of array once instead of each iteration
  for(var index=0; index < length; index++)
  {
    if(numbertoSearch === arrayToSearch[index]) // if the element is found, change the value of lastIndeX of Element
    {
      lastIndexOf++;
    }
  }
  return lastIndexOf;
}

export {
  lastIndexOf,
};
