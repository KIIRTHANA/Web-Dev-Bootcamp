var num = Math.random();
num = num * 6;
num = Math.floor(num) + 1;
console.log(num);
var one = prompt("What's your name ?");
var two = prompt("What's their name ?");
if (num < 20) {
    alert("Hi" + one + "Your love score is" + num + "\nYou are not very compatible! Look for someone else");
}
else if (num > 20 && num < 50) {
    alert("Hi" + one + "Your love score is" + num + "\nYou are moderately compatible! appreciate the differences");
}
else if (num > 50 && num < 90) {
    alert("Hi" + one + "Your love score is" + num + "\nYou are highly compatible! Like minded people");
}
else {
    alert("Hi" + one + "Your love score is" + num + "\nYou are made for each other!!");
}

