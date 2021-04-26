
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

   
    const newState = document.createElement('div')
     const statecontainer = document.getElementById("statecontainer")
     statecontainer.innerHTML = ""
     statecontainer.append(newState)
   


    const nHeader1 = document.createElement('h1')    
nHeader1.innerHTML = data.state
newState.append(nHeader1)

const nHeader2 = document.createElement('h3')
nHeader2.innerHTML = 'Total of Cases'
newState.append(nHeader2)

const info1 = document.createElement('h4')
info1.innerHTML = (data.cases)
newState.append(info1)


const nHeader3 = document.createElement('h3')
nHeader3.innerHTML = "Today's Cases"
newState.append(nHeader3)

const info2 = document.createElement('h4')
info2.innerHTML = (data.todayCases)
newState.append(info2)

const nHeader4 = document.createElement('h3')
nHeader4.innerHTML = "Deaths"
newState.append(nHeader4)

const info3 = document.createElement('h4')
info3.innerHTML = (data.deaths)
newState.append(info3)

const nHeader5 = document.createElement('h3')
nHeader5.innerHTML = ("Today's Deaths")
newState.append(nHeader5)

const info4 = document.createElement('h4')
info4.innerHTML = (data.todayDeaths)
newState.append(info4)

const nHeader6 = document.createElement('h3')
nHeader6.innerHTML = ("Active Cases")
newState.append(nHeader6)

const info5 = document.createElement('h4')
info5.innerHTML = (data.active)
newState.append(info5)


})
}   

 
const searchbox = document.getElementById ('search')
const  submitbtn = document.getElementById ('submit-button')
submitbtn.addEventListener ('click', (e) => { 
    e.preventDefault()
  takedata(searchbox.value)
})
