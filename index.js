var sent = require('./email_log.json');

function checkDuplicates(){
  var dupObj = {};
  for (var i = 0; i < sent.emails.length; i++){
    var email = sent.emails[i].email;
    if (dupObj.hasOwnProperty(email)){
      dupObj[email]++;
    } else {
      dupObj[email] = 1;
    }
  }
  return dupObj;
}

console.log(checkDuplicates());