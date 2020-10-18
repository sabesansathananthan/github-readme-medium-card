const axios = require("axios");
const sharp = require("sharp");

//TODO: It is not correct for some publications such as. TDS
// const ansiWordBound = (c) =>
//   " " === c || "\n" === c || "\r" === c || "\t" === c;

// const readingTimeCalc = (text) => {
//   let words = 0;
//   let start = 0;
//   let end = text.length - 1;
//   let i;

//   const wordsPerMinute = 200;

//   while (ansiWordBound(text[start])) start++;
//   while (ansiWordBound(text[end])) end--;

//   for (i = start; i <= end; ) {
//     for (; i <= end && !ansiWordBound(text[i]); i++);
//     words++;
//     for (; i <= end && ansiWordBound(text[i]); i++);
//   }

//   const minutes = words / wordsPerMinute;
//   const displayed = Math.ceil(minutes.toFixed(2));

//   return `${displayed} min read`;
// };

const imgToDataURL = async (url) => {
  return await axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then(({ data }) => {
      return sharp(data).resize(198, 110).png().toBuffer();
    });
};

const dateFormat = (data) => {
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = data.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];
  return finalDate;
};

const asyncForEach = async (array, settings, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, settings, array);
  }
};

module.exports = { imgToDataURL, asyncForEach, dateFormat };
