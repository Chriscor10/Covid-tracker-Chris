
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
const nHeader1 = document.createElement('h1')    
nHeader1.innerHTML = data.state
document.body.append(nHeader1)

const nHeader3 = document.createElement('h3')
nHeader3.innerHTML = 'Total of Cases'
document.body.append(nHeader3)

const info1 = document.createElement('h4')
info1.innerHTML = (data.cases)
document.body.append(info1)
})
}   

 
const searchbox = document.getElementById ('search')
const  submitbtn = document.getElementById ('submit-button')
submitbtn.addEventListener ('click', (e) => { 
    e.preventDefault()
  takedata(searchbox.value)
})
