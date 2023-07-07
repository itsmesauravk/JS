//we can make flow of function executions

async function weather(){
    let pokharaW = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("45")
        },2000)
    });

    let kathmanduW = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("34")
        },6000)
    });

    //normally or old method
    // pokharaW.then(alert)
    // kathmanduW.then(alert)

    //new await
    let pkr = await pokharaW  //awaits for complete
    let ktm = await kathmanduW  //await for all complet then return all value together

    return[pkr,ktm]  //always returns values in arrey...

}
weather().then((value) =>{
    console.log(value)
})