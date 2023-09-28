let isAnagram = function (s, t) {
  sArray = s.split("");
  tArrat = t.split("");

  sortedS = sArray.sort();
  sortedT = tArrat.sort();

  joinedS = sortedS.join("");
  joinedT = sortedT.join("");

  return joinedS === joinedT;
};
