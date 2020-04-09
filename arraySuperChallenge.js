var superArray = ["Myhkas", "Nallas", 1, 2, 3, "Cake"];

var counter = 0;

for (var i = 0; i < superArray.length; i++) {
  console.log(superArray[i]);
  if (typeof superArray[i] === "string") {
    counter = counter + 1;
  }
}

console.log(counter);

var loud = "LKSJDLKJSDFLKJSD";

console.log(loud.toLowerCase());
