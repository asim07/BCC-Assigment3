Array1 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<h1>Qualifications: </h1> \n");

for (i = 0; i < Array1.length; i++) {
  document.write("<h3>", i + 1, ")", Array1[i], "</h3>");
}
