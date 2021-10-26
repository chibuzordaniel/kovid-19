// let date = document.getElementsByClassName('btn');
// console.log(date)

const d = new Date;
console.log(d.toDateString())
document.getElementById('demo').innerHTML = d.toDateString();


const m = new Date;
console.log(d.toLocaleDateString())
document.getElementById('covid-date').innerHTML = m.toDateString();