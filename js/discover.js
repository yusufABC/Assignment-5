document.addEventListener("DOMContentLoaded",function(){
    const backToDesk=document.getElementById("back-desk")
    const discoverBtn=document.getElementById("discover")
    
    if(discoverBtn){
        discoverBtn.addEventListener("click",function(){
            window.location.href="./discover.html"
        })
    }
    
        if(backToDesk){
            backToDesk.addEventListener("click",function(){
        window.location.href="./index.html"
    
            })
        }
    
       
    
        
    })