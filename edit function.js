//simple function

let Edit = (val,id,ind)=> {
    return dispatch => {
        console.log(id)
Firebase.firestore().collection("product").doc(id).set(val).then(function(){
product.splice(ind,1,val)
  
})
}
}



//  by redux 
let Edit = (val,id,ind)=> {
    return dispatch => {
        console.log(id)
Firebase.firestore().collection("product").doc(id).set(val).then(function(){
    dispatch({
        type: "edit",
        ind : ind,
        val: val
    })
})
}
}

// in reducer file
case "edit" 
state.myproduct.splice(action.ind,1,action.val)
return {
    ...state, myproduct: state.myproduct.concat()
}