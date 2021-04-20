
function takedata(value) {
   
fetch(`https://corona.lmao.ninja/v2/states/${value}?yesterday=`, {
    headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
    }
})

.then(function (response) {
    return response.json();
})

.then(function(data) {
    console.log(data)
})
}

 
const searchbox = document.getElementById ('search')
const  submitbtn = document.getElementById ('submit-button')
submitbtn.addEventListener ('click', (e) => { 
    e.preventDefault()
  takedata(searchbox.value)
})
