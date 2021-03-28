const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let res = []

  for(let i=0; i< options.repeatTimes;i++){
    res.push(str)
  }
  if("separator" in options ){
      
      return res.join(options.separator)
  }else return res.join('+')
};
  