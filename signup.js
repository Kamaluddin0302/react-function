// simple sign up  Function  

Firebase.auth().createUserWithEmailAndPassword("kamaluldin1999@gmail.com", "1234567")
.then(function(res) {
    console.log(res)
user = res
})
.catch((err)=>{
console.log("Error")
})






// Sign up Email Verification  

Firebase.auth().createUserWithEmailAndPassword("kamaluldin1999@gmail.com", "1234567")
.then(function(res) {
    console.log(res)
user = res
})
    .then(function(){
        var user = Firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
        alert('send')
    })
    .catch(function(error) {
        // An error happened.
    });
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    // ...
    console.log(errorCode)
  });



// Sign up Email Verification   by redux


return dispatch=> {
 Firebase.auth().createUserWithEmailAndPassword("kamaluldin1999@gmail.com", "1234567")
    .then(function(res) {
        user = res
    })
    .then(function(){
        var user = Firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
        alert('send')
    })
})
.catch(function(error) {
    var errorCode = error.code;
    console.log(errorCode)
});
}