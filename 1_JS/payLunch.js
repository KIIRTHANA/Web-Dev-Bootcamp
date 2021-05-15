var names = ["Angela", "Ben", "Jenny", "Micheal", "Chloe"];
/******Don't change the code above*******/
function whosPaying(names) {

    /******Don't change the code above*******/
    var num = names.length;
    //Write your code here.

    var rand = Math.random();
    rand = rand * num;
    rand = Math.floor(rand);

    var result = names[rand] + " is going to buy lunch today!";
    return result;


    /******Don't change the code below*******/
}