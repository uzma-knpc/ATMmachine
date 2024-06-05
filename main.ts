#! /usr/bin/env node
import inquirer from "inquirer"
let mybalaance=100000
let mypin=1415

console.log("***ATM MACHINE***")
const myans=await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:"Enter your pin",
    },
   
    ]
    )
if(myans.pin===mypin){
    console.log("\n Congratulation,your pin is correct")


for(var i=0;i<7;i++){
let myoption=await inquirer.prompt([
    {
        name:"choice",
        type:"list",
        message:"\n Please select any one of the options",
        choices:["Balance","cashwithdrwl","SubmitYourBILL"]

    }
])
if (myoption.choice==="Balance"){
    console.log(`Your remaining Balance is ${mybalaance} $`)
    console.log("__________________________________________")

}
else if(myoption.choice==="cashwithdrwl"){
 let myamount=await inquirer.prompt([
    {
        name:"amount",
        type:"number",
        message:"Enter your amount",
        }
 ])
 
  mybalaance=mybalaance-myamount.amount
  if (mybalaance<0){
    console.log(`Your remaining Balance is Insufficient`)
 }
 else {
    console.log(`Your remaining Balance is ${mybalaance} $`)
    console.log("__________________________________________")

 }

}

else if(myoption.choice==="SubmitYourBILL"){
    let mybillamount=await inquirer.prompt([
       {
           name:"billamount",
           type:"number",
           message:"Enter your Bill amount",
           }
    ])
    
     mybalaance=mybalaance-mybillamount.billamount
     if (mybalaance<0){
        console.log(`Your remaining Balance is Insufficient`)
     }
     else {
        console.log(`Your remaining Balance is ${mybalaance} $`)
        console.log("__________________________________________")
    
     }
    
   }


let repeat=await inquirer.prompt([
    {
    name:"repeat",
    message:"\n\n Want to repeat the operation",
    type:"list",
    choices:["Yes","No"],
    }
])
    if(repeat.repeat==="Yes"){
      i++
    }
    else if(repeat.repeat==="No"){
i=10
    //    console.log("by")
    }
}

}

 else{
    console.log("Pin is incorrect.Try again")
 }