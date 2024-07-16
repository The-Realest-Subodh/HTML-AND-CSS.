let key = prompt("Enter the Key you want ");
let value = prompt("Enter the value for the key ");

console.log(`The value of ${key} is ${value}.`);

localStorage.setItem(key, value);

if (key == 0) {
  localStorage.clear;
}

// you can get the value of the key using
// localStorage.getItem(key)

// you can get the length of the localstrage(the number of stored items) using
// localStorage.length()

// you can get the index of the key using
// key(index)
