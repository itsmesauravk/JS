const addBtn = document.getElementById('add');
const viewBtn = document.getElementById('view');
const display = document.getElementById('display')


//fetchin data from json file named data.json
function fetchinData(){
    const data = fetch('data.json')
    data.then((res)=>{
    return res.json()
    }).then((result)=>{
    console.log(result)
    const name = document.getElementById('name')
    const number = document.getElementById('number')
    const address = document.getElementById('address')

    let jsonData = {
        "name":name.value,
        "contact":number.value,
        "address":address.value
    }
    result.push(jsonData)
    name.value = ''
    number.value = ''
    address.value =''
    display.textContent = JSON.stringify(result)
    const vals = JSON.stringify(result) 
    for(i=0;i<result.length; i++){
        // display.innerHTML = (`id : ${(i)}<br>
        // Name : ${result[i].name}<br>
        // Contact : ${result[i].contact}<br>
        // address : ${result[i].address} `)
        console.log(`id : ${(i)}<br>
        Name : ${result[i].name}<br>
        Contact : ${result[i].contact}<br>
        address : ${result[i].address} `)
    }
})
}

addBtn.addEventListener('click',()=>{
    fetchinData()
    console.log("clicked")
})