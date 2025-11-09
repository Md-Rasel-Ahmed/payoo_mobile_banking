
function getFormId(id){
    const form_id=document.getElementById(id)
    return form_id
    
}
function getInputValue(id){
     const value=document.getElementById(id).value
     return parseFloat(value)
}
// toggle hide form funtion
function toggle(id,btn_id){
    const all_container=document.getElementsByClassName("container")
    for(const a of all_container){
        if(a.id===id){
            a.classList.remove("hidden")
        }else{
            a.classList.add("hidden")
        }
    }
    const all_btn=document.getElementsByClassName("btn")
    for(const btn of all_btn){
       if (btn.id===btn_id) {
         btn.classList.add("bg-blue-700")      
       }else{
        btn.classList.remove("bg-blue-700") 
       }
       
    }
}

// button click and show form
function buttonClick(id,form_id){
    document.getElementById(id).addEventListener("click",function(e){
   const add_money_div=getFormId(form_id)
    toggle(add_money_div.id,id)
    
})
   
}