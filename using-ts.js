var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var n1 = '5';
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// define object type
var person1 = {
    name: 'Max',
    age: 30
};
// or define
var person2 = {
    name: 'Max',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};
// define array
var favoriteActivities;
console.log(person1.name);
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person2.role === Role.ADMIN) {
    console.log("is Admin");
}
// In function, we can define data type of varient 
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
