imageFunc = async (e) => {
    console.log(e.target.files[0])
    let imagename = e.target.files[0].name
    let ref = Firebase.storage().ref('/').child("image/" + imagename)
    await ref.put(e.target.files[0])
    ref.getDownloadURL().then(url =>
      this.setState({
        image: url,
      })
    )
  }

  