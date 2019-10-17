//simple get value function  

let GetRestorent = ()=> {
   let {Allrestorent} = this.state
    Firebase.firestore().collection("collectionname").get()
        .then(data=>{
            console.log(data)
            data.forEach(value=>{
                let result = value.data();
                Allrestorent.push(result);
                this.setState({
                    Allrestorent : Allrestorent
                })
            })
        })    
     }




     // by redux 



     let GetRestorent = ()=> {
        return async dispatch => {
          await Firebase.firestore().collection("restorents").get()
            .then(data=>{
                console.log(data)
                data.forEach(value=>{
                    let result = value.data();
                    Allrestorent.push(result);
                     dispatch({
                         type : "allrestorent",
                         payload:Allrestorent,
                     })
                })
            })    
         }
    
    }