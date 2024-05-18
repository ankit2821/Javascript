const date = new Date();

console.log(
  date.toLocaleString("default", {
    // dateStyle: "full",
    date: "full",
    weekday: "short",
  })
);

// console.log(date.getDate());

// console.log(date.toDateString()); //return only the cirrent date with day month date year
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString()); //return date in dd/mm/yyyy
// console.log(date.toLocaleTimeString()); //return timme in hr:min:sec am/pm
// console.log(date.toString()); //return both date and time
// console.log(date.toTimeString()); //return only time in IST 24/7
// console.log(date.toUTCString()); //return day date time in GMT

// const myDate = new Date(2024, 0, 31);
// const myDate = new Date(2024, 0, 31, 15, 48, 24);
const myDate = new Date("11-12-2024");

// console.log(myDate.toLocaleString());
