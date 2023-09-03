// const coding = ["rb", "py", "js", "c#", "c++"];
// coding.forEach(function (item) {
// //   console.log(item);
// //    });
// coding.forEach((item) => {
//   console.log(item);
// });

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFilName: "js",
  },
  {
    languageName: "java",
    languageFilName: "java",
  },
  {
    languageName: "python",
    languageFilName: "py",
  },
];
myCoding.forEach((item) => {
  console.log(item.languageName);
});
