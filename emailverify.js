// Email Verify
function EmailVarefied(){
    var user = Firebase.auth().currentUser;
    console.log(user)
    user.sendEmailVerification().then(function() {
console.log(user)
    }).catch(function(error) {
      // An error happened.
    });
}