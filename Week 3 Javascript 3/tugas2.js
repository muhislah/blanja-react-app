const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ["January","Februari","March","April","May","June","July","August","September","Oktober","November","Desember"]
        if (!error){
            callback(null, month)
        }else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000)
}


// using callback 
getMonth((err, month) => {
    if (!err){
        month.map(data => {
            console.log(data)
        })
    }else{
        console.log(err)
    }
})
