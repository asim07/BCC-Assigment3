colors = ["yellow", "green", "red", "Blue"];
document.write("<h3>Array values : ", colors, "\n</h3>");
var value = prompt("Enter the color want to add at the begning");
colors.unshift(value);
document.write("<h3>Array values after adding at begning: ", colors, "\n</h3>");
var value = prompt("Enter the color want to add at the end of array");
colors.push(value);
document.write(
  "<h3>Array values after adding at the end : ",
  colors,
  "\n</h3>"
);
colors.unshift("pink", "magenta");
document.write(
  "<h3>Array values after adding 2 more colors : ",
  colors,
  "\n</h3>"
);
colors.shift();

document.write(
  "<h3>Array values after deleting first value : ",
  colors,
  "\n</h3>"
);
colors.pop();
document.write(
  "<h3>Array values after deleting last value : ",
  colors,
  "\n</h3>"
);
value = prompt("Enter the index at which u want to add color");
var col = prompt("Enter the color");
colors.splice(value, 0, col);
document.write(
  "<h3>Array values after adding color at index : ",
  colors,
  "\n</h3>"
);
value = prompt("Enter the index at which u want to delete colors");
var col = prompt("Enter how many u want to delete");
colors.splice(value, parseInt(col));

document.write(
  "<h3>Array values after deleting color at index : ",
  colors,
  "\n</h3>"
);
