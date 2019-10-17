//Login with Email and password

// Firebase === firebase which you improprt from firebase.js


Firebase.auth().signInWithEmailAndPassword(state.email,state.password)
.then(function(res){
    let user = res.user
})
.catch(function(error) {
});





// if you use redux then


return dispatch => {
Firebase.auth().signInWithEmailAndPassword(state.email,state.password)
.then(function(res){
    let user = res.user
    dispatch({
        type: "xyz",
        payload : "xyz"
    })
})
.catch(function(error) {
});
}