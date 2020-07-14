names = ["Michael", "John", "Tony"];
scores = [320, 230, 480];
for (i = 0; i < names.length; i++) {
  result = (scores[i] / 500) * 100;
  document.write(
    "<h3>Score of ",
    names[i],
    " is ",
    scores[i],
    ". Percentage : ",
    result,
    "% </h3>"
  );
}
