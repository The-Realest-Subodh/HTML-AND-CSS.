const date = new Date();

console.log(date);

const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date1);

const date2 = new Date("2024-01-02T12:00:00Z");
console.log(date2);

const date3 = new Date(0); //epic date (date that computer think where time started)

const date4 = new Date(17000000000); //17000000000ms after the epic date

console.log(date3);
console.log(date4);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const day_date = date.getDate();

console.log(year);
console.log(month);
console.log(day);
console.log(day_date);
