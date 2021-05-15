exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    const day = today.toLocaleDateString("en-US", options);
    return day;
}
//TWO WAYS OF DECLARING A FUNCTION 
exports.getDay = getDay;

function getDay() {
    const today = new Date();
    const options = {
        weekday: "long",
    };
    const day = today.toLocaleDateString("en-US", options);
    return day;
}
