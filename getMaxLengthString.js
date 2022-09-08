const { template } = require("@babel/core");

function getMaxLengthString(arrayOfString) {
  //code here
  let x = arrayOfString
  let maxLength = 0;
  let arr = [];
  if (x === undefined || x===null) {
    return undefined;
  }
  for (let i = 0; i < x.length; i++) {
      if (x[i].length > maxLength) {
      maxLength = x[i].length;
    }
      
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i].length == maxLength) {
      arr.push(x[i]);
   }
  }
  return arr
  
}

module.exports = getMaxLengthString;

