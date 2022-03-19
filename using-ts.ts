const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
let n1 = '5';

// enum
enum Role {ADMIN, READ_ONLY, AUTHOR};

// define object type
const person1:{
    name: string;
    age: number;
} = {
    name: 'Max',
    age: 30
};

// or define
const person2 ={
    name: 'Max',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};

// define array
let favoriteActivities: any[];

console.log(person1.name);
for (const hobby of person2.hobbies) {
    console.log(hobby);
}


if (person2.role === Role.ADMIN) {
    console.log("is Admin");
    
}

// In function, we can define data type of varient 
function add(num1: number, num2: number)
{
    return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value))
})
