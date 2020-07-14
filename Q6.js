var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

for (i = 0; i < aCities.length - 1; i++) {
  document.write("<h2>", i + 1, o[i + 1], " Choice is ", aCities[i], "</h2>");
}
