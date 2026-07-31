const promise = new Promise((resolve, reject) => { 

    resolve(10)
})
promise 
        .then((value) => {
           return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(value*2)
            },1000)
           })
        })
        .then((number) => {

            console.log(number)
        })
        .catch((error) =>{
            console.log("pomilka")
        })