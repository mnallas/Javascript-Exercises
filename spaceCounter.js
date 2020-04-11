var sampleString =
  "My name is Myhkas Nallas and I sleep a lot and sleep a lot.";
var spaces = 0;

for (i = 0; i < sampleString.length; i++) {
  if (sampleString.charAt(i) === " ") spaces++;
}

console.log(spaces);
