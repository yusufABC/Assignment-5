const date=document.getElementById("date")
const paraDate=document.createElement("p")

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const originialDate = new Date().toLocaleDateString('en-US', options);
paraDate.textContent=originialDate

date.appendChild(paraDate)
