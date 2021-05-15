function isLeap(year) {

    /**************Don't change the code above****************/
    var result = " ";
    if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
        result = "Leap year.";

    }
    else if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {

        result = "Not Leap year.";

    }
    else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {

        result = "Not leap year.";

    }
    else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        result = "Leap year.";
    }
    else {
        result = "Not leap year.";
    }

    return result;


    /**************Don't change the code below****************/

}