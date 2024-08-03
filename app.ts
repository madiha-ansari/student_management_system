#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber : number = 100000 + Math.random() * 90000;
let myBalance : number=0;
let answer = await inquirer.prompt(
    [
        {
            name:"students",
            type:"input",
            message:"Enter student name:",
            validate: function (value){
if (value.trim() !== ""){
    return true;
}
return "please enter a non-empty value.";
            },
        },
        {
            name:"courses",
            type:"list",
            message:"select the course to enrolled",
            choices:["Ms.office","HTML","Typescript","Javascript","Python"],
        }
    ]
);
const tutionFee:{[key:string]:number}={
    "Ms.office":2000,
    "HTML":3000,
    "Typescript":3500,
    "Javascript":4000,
    "Python":4500
};
console.log(`\n tutionfees:${tutionFee[answer.courses]} \n`);
console.log(`balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"select payment method",
        choices:["Bankaccount","Easypaisa","Jazzcash"]
    },
    {
        name:"amount",
        type:"input",
        message:"transfer money",
        validate: function (value){
            if (value.trim() !== ""){
                return true;
            }
            return "please enter a non-empty value.";
    },
}

]);

console.log(`\n you select payment method ${paymentType.payment}`);

const tutionFees = tutionFee[answer.courses] ;
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount){
     console.log(`Congratulations you have successfully enrolled in ${answer.courses}\n`);

let ans = await inquirer.prompt([{
    name:"select",
    type:"list",
    message:"what would you like to do next?",
    choices:["View Status", "Exit"]
}])

if(ans.select === "View Status"){
     console.log(`Student Name:${answer.students}`);
    console.log(`Student ID:${randomNumber}`);
    console.log(`Course:${answer.courses}`);
    console.log(`Tuition fees paid:${paymentAmount}`);
    console.log(`Balance:${myBalance += paymentAmount}`);   
}

}else {
    console.log("Invalid amount due to course");    
}

