//  delete Simple


let DeleteProduct = (id,ind)=> {
let {product} = this.state
Firebase.firestore().collection("product").doc(id).delete().then(function(){
product.splice(ind,1)
this.setState({
    product : product
})
})
}


// By redux
let DeleteProduct = (id,ind)=> {
    return dispatch => {
Firebase.firestore().collection("collectionname").doc(id).delete().then(function(){
    dispatch({
        type: "delete",
        ind : ind
    })
})
}
}
// reducer file
case "delete" :
state.myproduct.splice(action.ind,1)
return {
    ...state, myproduct: state.myproduct.concat()
}

