let obj = {
  name: "Aashutosh",
  sem: 8,
};
console.log(obj);

let jsonString = JSON.stringify(obj);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);
