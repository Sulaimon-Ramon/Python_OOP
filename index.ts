let  firstName : string = "Ramon";
console.log(firstName);

let lastName : string = "Sulaimon";
console.log(lastName);

let fullName : string = firstName + " " + lastName;
console.log(fullName)
console.log(fullName.toUpperCase());

let len : string = "Liverpool FC";
console.log(len.length)


for(let i = 0; i <= 20; i+=2){
    console.log(i);
}

let x = 0;

while(x <= 10){
    console.log(x);
    x++;
}

let grade = 60;

if(grade <= 35){
    console.log("You Scored an F" + " " + ":" + " " + grade + " " + "Fail !!!");
}else if(grade > 35 && grade <= 40){
    console.log("You Scored an E" + " " + ":" + " " + grade + " " + "Pass !!!");
}else if(grade > 40 && grade <= 55){
    console.log("You Scored a D" + " " + ":" + " " + grade + " " + "Average !!!");
}else if(grade > 55 && grade <= 70){
    console.log("You Scored a C" + " " + ":" + " " + grade + " " + "Credit !!!");
}else if(grade > 70 && grade <= 79){
    console.log("You Scored a B" + " " + ":" + " " + grade + " " + "Excellent !!!");
}else if(grade > 79 && grade <= 100){
    console.log("You Scored an A" + " "  + ":" + " " + grade + " " + "Distinction !!!");
}else{
    console.log("Invalid Grade");
}
    

const person = {
    firstName: "Roy",
    lastName : "Keane",
    yearOfBirth: 1973,
    phoneNumber : +2348064324942,
    sex: "male",
    nationality: "Wales",
    height: "180cm",
    calculateAge(){
        return 2026 - this.yearOfBirth
    }
}

console.log(person);
console.log("I am " + person.firstName + " " + person.lastName + ", and i am " +  person.calculateAge() + " " + "Years old.");


function greet(name: string){
    console.log("Good Morning" + " " + name)
}
greet("Keith");