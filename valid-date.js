let remainder = (num, div) => {
  return num % div === 0 ? true : false;
};

let monthDayYearValid = (month, day, year) => {
  let monthMinMax = (num) => (num >= 1 && num <= 12 ? true : false);
  let dayMinMax = (num) => (num >= 1 && num <= 31 ? true : false);
  let yearMinMax = (num) => (num >= 1 && num <= +Infinity ? true : false);

  if (monthMinMax(month) && dayMinMax(day) && yearMinMax(year)) {
    return true;
  } else {
    return false;
  }
};

let leapMonth = (month, year) => {
  if (month == 2) {
    if (leapYear(year)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
let leapYear = (num) => {
  if (remainder(num, 4)) {
    if (remainder(num, 100)) {
      if (remainder(num, 400)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

let compareMonthDay = (month, day) => {
  let dayMinMaxSet = (min, day, max, month) => {
    return min <= day && max >= day ? true : false;
  };
  if (
    (month == 4 || month == 6 || month == 7 || month == 9 || month == 11) &&
    dayMinMaxSet(1, day, 30, month)
  ) {
    return true;
  } else if (
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12) &&
    dayMinMaxSet(1, day, 31, month)
  ) {
    return true;
  } else {
    return false;
  }
};

debugger;
let validDate = (month, day, year) => {
  if (monthDayYearValid(month, day, year)) {
    if (compareMonthDay(month, day) || leapYear(year)) {
      if (leapYear(year)) {
        if (leapMonth(month, year)) {
          return true;
        } else {
          return false;
        }
      } else if (
        !leapMonth(month, year) &&
        leapYear(year) &&
        monthDayYearValid(month, day, year)
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(validDate(6, 31, 1999));
console.log(validDate(11, 30, 1999));
console.log(validDate(11, 31, 1999));
console.log(validDate(6, 31, 1999));
console.log(validDate(6, 30, 1999));
console.log(validDate(4, 31, 1999));
console.log(validDate(10, 4, 1949));
console.log(validDate(20, 4, 1776));
console.log(validDate(5, 0, 1992));
console.log(validDate(2, 29, 1900));
console.log(validDate(2, 29, 2000));
