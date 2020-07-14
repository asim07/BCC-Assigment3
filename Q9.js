A = [24, 53, 78, 91, 12];
var temp = A[0];
for (i = 0; i < A.length; i++) {
  if (temp < A[i]) {
    temp = A[i];
  }
}
document.write("Biggest number is : ", temp);
