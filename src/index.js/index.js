// let date = document.getElementsByClassName('btn');
// console.log(date)

const d = new Date;
console.log(d.toDateString())
document.getElementById('demo').innerHTML = d.toDateString();


const m = new Date;
console.log(d.toLocaleDateString())
document.getElementById('covid-date').innerHTML = m.toDateString();



const url ="https://api.covid19api.com/summary";
fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data.Global.TotalConfirmed)
    document.querySelector('.pom').innerHTML = data.Global.TotalConfirmed;
    document.querySelector('.app').innerHTML = data.Global.NewConfirmed;
    document.querySelector('.elo').innerHTML = data.Global.TotalRecovered;
    document.querySelector('.kido').innerHTML = data.Global.TotalDeaths;

}) 


const ul = "https://api.covid19api.com/countries"
fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data)
})








