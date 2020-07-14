var ar = ["cake", "apple pie", "cookie", "chips", "patties"];

var value = prompt("Welcome to ABC Bakery.What do you want to order sir/maam");

var reslt = ar.indexOf(value);

if (reslt == -1) {
  document.write("We are sorry.", value, " is not available in our bakery");
} else {
  document.write(value, " is available at index ", reslt, " in our bakery");
}
