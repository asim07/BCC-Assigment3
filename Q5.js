var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var dValues = [];
var temp = [];
for (i = 0; i < arr1.length; i++) {
  if (dValues.indexOf(arr1[i]) != -1) {
    continue;
  }
  temp.push(arr1[i]);
  dValues.push(arr1[i]);
}
document.write("before = ", arr1);

arr1 = temp;

document.write("\nAfter = ", arr1);
