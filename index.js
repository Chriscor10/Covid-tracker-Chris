
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

const nHeader2 = document.createElement('h3')
nHeader2.innerHTML = 'Total of Cases'
document.body.append(nHeader2)

const info1 = document.createElement('h4')
info1.innerHTML = (data.cases)
document.body.append(info1)


const nHeader3 = document.createElement('h3')
nHeader3.innerHTML = "Today's Cases"
document.body.append(nHeader3)

const info2 = document.createElement('h4')
info2.innerHTML = (data.todayCases)
document.body.append(info2)

const nHeader4 = document.createElement('h3')
nHeader4.innerHTML = "Deaths"
document.body.append(nHeader4)

const info3 = document.createElement('h4')
info3.innerHTML = (data.deaths)
document.body.append(info3)

const nHeader5 = document.createElement('h3')
nHeader5.innerHTML = ("Today's Deaths")
document.body.append(nHeader5)

const info4 = document.createElement('h4')
info4.innerHTML = (data.todayDeaths)
document.body.append(info4)

const nHeader6 = document.createElement('h3')
nHeader6.innerHTML = ("Active Cases")
document.body.append(nHeader6)

const info5 = document.createElement('h4')
info5.innerHTML = (data.active)
document.body.append(info5)


})
}   

 
const searchbox = document.getElementById ('search')
const  submitbtn = document.getElementById ('submit-button')
submitbtn.addEventListener ('click', (e) => { 
    e.preventDefault()
  takedata(searchbox.value)
})
