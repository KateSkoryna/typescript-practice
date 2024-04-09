/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var WorkingDay;
(function (WorkingDay) {
    WorkingDay[WorkingDay["Monday"] = 0] = "Monday";
    WorkingDay[WorkingDay["Tuesday"] = 1] = "Tuesday";
    WorkingDay[WorkingDay["Wednesday"] = 2] = "Wednesday";
    WorkingDay[WorkingDay["Thursday"] = 3] = "Thursday";
    WorkingDay[WorkingDay["Friday"] = 4] = "Friday";
})(WorkingDay || (WorkingDay = {}));
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Saturday"] = 0] = "Saturday";
    Weekend[Weekend["Sunday"] = 1] = "Sunday";
})(Weekend || (Weekend = {}));
function isWeekend(day) {
    if (WorkingDay[WorkingDay[day]]) {
        return true;
    }
    else if (Weekend[Weekend[day]]) {
        return false;
    }
    throw Error("Write correct day");
}
export {};
//# sourceMappingURL=7.js.map