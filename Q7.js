var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = b.concat(a);
var dValues = [];
var temp = [];
for (i = 0; i < result.length; i++) {
  if (dValues.indexOf(result[i]) != -1) {
    continue;
  }
  temp.push(result[i]);
  dValues.push(result[i]);
}

result = temp;
document.write(result);
