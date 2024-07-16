const user = {
  name: "John",
  age: 30,
  password: "secret",
};

//json stringify takes replacer function that gets called for each key value pair that changes values during serialization
const jsonString = JSON.stringify(user, (key, value) => {
  if (key === "password") return undefined;
  return value;
});

console.log(jsonString);

const js_string =
  '{"name":"John","age":30,"birthDate":"1990-01-01T00:00:00.000Z"}';

//json parser takes reviver function that gets called for each key value pair that transforms the values during deserialization
const obj = JSON.parse(js_string, (key, value) => {
  if (key === "birthDate") return new Date(value);
  return value;
});

console.log(obj);
console.log(obj.birthDate instanceof Date);
