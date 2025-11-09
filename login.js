
document.getElementById("singin").addEventListener("click",function(e){
  e.preventDefault()
  const phone=document.getElementById("phone")
  const pin=document.getElementById("pin")
  if(phone.value==="1234"&& pin.value==="1234"){
    location.href="home.html"
  }else{
   
   
  }
})

