var promise =  new Promise((resolve,reject)=>{
    var a = "Adfar";
    var b = "ddfar";
    if(a===b){
        resolve("succeed")
    }
    else{
        reject("failure")
    }
})
promise.then((result)=>{
    console.log(result)
    console.log("fulfilled")
}).catch((error)=>{
    console.log(error)
    console.log("not fulfilled")
})