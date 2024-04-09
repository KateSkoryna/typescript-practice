/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WorkingDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}
  
enum Weekend {
  Saturday,
  Sunday
}

// Option 1
function isWeekend(day: string): boolean | never {
    if (day in WorkingDay) {
      return true;
    } else if (day in Weekend) {
      return false;
    }
      throw Error("Write correct day")
  }
  
//Option 2
  // function isWeekend(day: string): boolean | never {
  //   if (WorkingDay[WorkingDay[day]]) {
  //     return true;
  //   } else if (Weekend[Weekend[day]]) {
  //     return false;
  //   }
  //     throw Error("Write correct day")
  // }


export { };