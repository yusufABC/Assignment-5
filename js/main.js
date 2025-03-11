const taskAssigned=document.getElementById("taskAssigned")
const checkedTask=document.getElementById("checkedTask")
const completeBtn=document.getElementsByClassName("complete-btn")
const activityDiv=document.getElementById("activityDiv")
// const cardTitle=document.getElementsByClassName("card-title").innerText

// const cardTitle1=document.getElementById("card-title").textContent


for(let button of completeBtn){
button.addEventListener("click",function(){
    
    this.classList.add('fade')
    this.style.opacity='.5'
    this.disabled=true
const cardTitle = this.parentNode.parentNode.querySelector(".card-title").innerText;

    alert("board Updated Successfully")
    let taskCount=parseInt(taskAssigned.innerText)
    let checkCount=parseInt(checkedTask.innerHTML)
    if (taskCount<0){
        taskCount=0
        checkCount=0
    }if(taskCount>0){

        taskCount-=1
        checkCount+=1
    }

   taskAssigned.innerText=taskCount
   checkedTask.innerHTML= checkCount
   const activityPara=document.createElement("p")
   const activityMsg=`you have add a task "${cardTitle}" at ${new Date().toLocaleTimeString()} `

   activityPara.textContent=activityMsg
activityDiv.appendChild(activityPara)
})
}

// reset button 
const resetBtn=document.getElementById("reset-btn")
resetBtn.addEventListener("click",function(){
    activityDiv.innerHTML=""
})


const card6Btn=document.getElementById("card-6-btn")
card6Btn.addEventListener("click",function(){
    alert("Congrats You Have Complete All The Task")
})
