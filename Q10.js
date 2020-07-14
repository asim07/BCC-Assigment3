A = [20, 53, 78, 4, 91, 12];
var value;
for (i = 0; i < A.length; i++) {
  for (j = 0; j < A.length; j++) {
    if (A[i] < A[j]) {
      temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  }
}

document.write(A);
