const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === null || members === undefined || members.constructor != Array){
    return false;
  }
  else {
    let nameDreamTeam = [];
    members.forEach(function(item){
      if(typeof item === 'string'){
        nameDreamTeam.push(item.trim().toUpperCase().substr(0,1));
      };
    });
    return nameDreamTeam.sort().join('');
  };
};
