
function balancedBraces(...args) {
  var braces = "[]{}()"; // taking the string for various braces
  var stackToPushEachElement = []; // creating a stack to push and pop braces
  for(var brace of args[0]) {
    var braceIndex = braces.indexOf(brace)

    if (braceIndex === -1){
      continue;
    }

    if(braceIndex % 2 === 0) {
      stackToPushEachElement.push(braceIndex + 1)
    } else {
      if(stackToPushEachElement.pop() !== braceIndex) {
        return false;
      }
    }
  }

  return "No input provided";
}

export {
  balancedBraces,
};
