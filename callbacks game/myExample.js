function cbTrigger() {
    console.log("Request")
    cb((res) => {
        console.log(res)
    })
}

function cb(callback){
    setTimeout(() => {
        callback("Response");
    }, 1000)
}