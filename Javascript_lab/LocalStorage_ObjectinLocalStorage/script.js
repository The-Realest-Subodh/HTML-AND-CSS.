let Obj = {
  name: "Aashutosh",
  roll_no: 28280,
};

localStorage.setItem("myObj", Obj);
console.log(localStorage);

let myObj_serialized = JSON.stringify(Obj);
localStorage.setItem("myObj_srz", myObj_serialized);

console.log(localStorage);

// now to actually use the obj as it is you need to first deserialize it like this

// obj_deserialized = JSON.parse(myObj_serialized)
