var arr1 = [1, 2, 3, "Myhkas", "Nallas", true, false];
var string = 0;
var numbers = 0;
var boolean = 0;
for (i = 0; i < arr1.length; i++) {
  if (typeof arr1[i] === typeof "") {
    string++;
  } else if (typeof arr1[i] === typeof 1) {
    numbers++;
  } else if (typeof arr1[i] === typeof true) {
    bool++;
  }
}
console.log(string + " " + numbers + " " + bool);
