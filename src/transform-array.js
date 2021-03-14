const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '--discard-next' && i <(arr.length-1)){
            i =i+3;
        }
        if(arr[i] === '--discard-prev' && i !== 0){
            newArr = newArr.slice(0, newArr.length-1)
        }
        if(arr[i] === '--double-next' && i < (arr.length-1)){
            newArr.push(arr[i+1])
            i++
        }
        if(arr[i] === '--double-prev' && i !== 0){
            newArr.push(arr[i-1])
        }
        if(typeof arr[i] === 'number') {
            newArr.push(arr[i])
        } 
    }
    return newArr
};
