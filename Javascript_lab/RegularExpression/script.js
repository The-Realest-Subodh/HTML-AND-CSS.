const str = "this is a very very very good text";

console.log(str.replace("very", "VERY"));

const str_regx = /very/g;

console.log(str.replace(str_regx, "VERY"));
