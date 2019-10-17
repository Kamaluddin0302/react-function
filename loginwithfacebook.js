 // firebase
let firebaseapp = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();

let providerapp = provider.setCustomParameters({'display': 'popup'});






function loginfacebook(){
return new Promise(function(resolve,reject){
firebaseapp.auth().signInWithPopup(providerapp)
.then(function(result) {
  var user = result.user;
  resolve(user)
}).catch(function(error) {
  var credential = error.credential;
  reject(credential)
});
})
}