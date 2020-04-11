var sampleString =
  "My name is Myhkas Nallas and I sleep a lot and sleep a lot.";
var vowels = 0;

for (i = 0; i < sampleString.length; i++) {
  if (
    sampleString.charAt(i) === "a" ||
    sampleString.charAt(i) === "e" ||
    sampleString.charAt(i) === "i" ||
    sampleString.charAt(i) === "o" ||
    sampleString.charAt(i) === "u" ||
    sampleString.charAt(i) === "A" ||
    sampleString.charAt(i) === "E" ||
    sampleString.charAt(i) === "I" ||
    sampleString.charAt(i) === "O" ||
    sampleString.charAt(i) === "U"
  )
    vowels++;
}

console.log(vowels);
