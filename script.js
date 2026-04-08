
let members=[]
let savings=[]
let loans=[]


function showSection(id){

document.querySelectorAll("section").forEach(sec=>{
sec.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}


document.getElementById("memberForm").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let staff=document.getElementById("staffId").value
let dept=document.getElementById("department").value

members.push({name,staff,dept})

updateMembers()

this.reset()

})


function updateMembers(){

let table=document.getElementById("memberTable")

table.innerHTML=""

members.forEach(m=>{

table.innerHTML+=`
<tr>
<td>${m.name}</td>
<td>${m.staff}</td>
<td>${m.dept}</td>
</tr>
`

})

document.getElementById("memberCount").innerText=members.length

}



document.getElementById("savingsForm").addEventListener("submit",function(e){

e.preventDefault()

let staff=document.getElementById("sMember").value
let amount=parseInt(document.getElementById("amount").value)

savings.push({staff,amount})

updateSavings()

this.reset()

})


function updateSavings(){

let table=document.getElementById("savingsTable")

table.innerHTML=""

let total=0

savings.forEach(s=>{

table.innerHTML+=`
<tr>
<td>${s.staff}</td>
<td>${s.amount}</td>
</tr>
`

total+=s.amount

})

document.getElementById("totalSavings").innerText=total+" UGX"

}



document.getElementById("loanForm").addEventListener("submit",function(e){

e.preventDefault()

let staff=document.getElementById("loanMember").value
let amount=parseInt(document.getElementById("loanAmount").value)
let months=document.getElementById("months").value

loans.push({staff,amount,months})

updateLoans()

this.reset()

})


function updateLoans(){

let table=document.getElementById("loanTable")

table.innerHTML=""

let total=0

loans.forEach(l=>{

table.innerHTML+=`
<tr>
<td>${l.staff}</td>
<td>${l.amount}</td>
<td>${l.months}</td>
</tr>
`

total+=l.amount

})

document.getElementById("totalLoans").innerText=total+" UGX"

}


function generateReport(){

let report=`
<h3>SACCO REPORT</h3>

Members: ${members.length}<br>
Total Savings: ${savings.reduce((a,b)=>a+b.amount,0)} UGX<br>
Total Loans: ${loans.reduce((a,b)=>a+b.amount,0)} UGX

`

document.getElementById("reportArea").innerHTML=report

}