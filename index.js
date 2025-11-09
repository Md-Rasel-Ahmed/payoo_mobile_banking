
// button click toggle

// all button clicked here
buttonClick("add","add_money_form")
buttonClick("cashout","cashout_form")
buttonClick("transfer","transfer_form")
buttonClick("bonus","bonus_form")
buttonClick("pay_bill","pay_bill_form")
buttonClick("transaction","transaction")

// add money functon
// document.getElementById("add").addEventListener("click",function(e){
//    const add_money_div=getFormId("add_money_form")
//     toggle(add_money_div.id,"add")
    
  
// })
// cashout button click
// document.getElementById("cashout").addEventListener("click",function(e){
//    const cashout_div=getFormId("cashout_form")
//     toggle(cashout_div.id)
//     cashoutClick=true;
//     addClick=false
//     if(cashoutClick){

//       e.target.classList.add("bg-red-300")
//     }

  
// })
// transfer button click
// document.getElementById("transfer").addEventListener("click",function(){
//    const transfer_div=getFormId("transfer_form")
//     toggle(transfer_div.id)
  
// })
// bonus button click
// document.getElementById("bonus").addEventListener("click",function(){
//    const bonus_div=getFormId("bonus_form")
//     toggle(bonus_div.id)
  
// })
// pay bill button
// document.getElementById("pay_bill").addEventListener("click",function(){
//    const pay_bill_div=getFormId("pay_bill_form")
//     toggle(pay_bill_div.id)
  
// })
// transaction button click
// document.getElementById("transaction").addEventListener("click",function(){
//    const transaction_div=getFormId("transaction")
//     toggle(transaction_div.id)
  
// })
// get value in the form
let blance=document.getElementById("total_balance")
let blance_number=parseFloat(blance.innerText)


document.getElementById("add_money").addEventListener("click",function(e){
  e.preventDefault()
  let value=getInputValue("amount_number")
  blance_number=blance_number+value
  blance.innerText=blance_number
})
document.getElementById("cashout_btn").addEventListener("click",function(e){
  e.preventDefault()
  let value=getInputValue("withdraw_amount")
  console.log(value);
  blance_number=blance_number-value
  blance.innerText=blance_number
})
document.getElementById("transfer_btn").addEventListener("click",function(e){
  e.preventDefault()
  let value=getInputValue("transfer_amount")
  console.log(value);
  blance_number=blance_number-value
  blance.innerText=blance_number
})