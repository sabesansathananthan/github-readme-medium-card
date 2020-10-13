require("./config");

var express = require("express");
var app = express();
app.use(express.json());

const axios = require("axios");

const blogCard = require("./blogCard");

const getUserData = async (username) => {
  try {
    const result = await axios.get(config.medium_API_URL + username);
    const filteredResult = result.data.items.filter(
      (item) =>
        (!item.thumbnail.includes("stat?event") ||
          !item.thumbnail.includes("&referrerSource")) &&
        item.categories.length > 0
    );
    return filteredResult;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

app.get("/getMediumBlogs", async (request, response) => {
  config.themes.current = request.query.theme || config.themes.current

  try {
    if (!request.query.username) {
      response.write(
        JSON.stringify({
          error: "your medium username is require in the query string",
        })
      );
      response.end();
      return;
    }
    const username = request.query.username;
    let limit = request.query.limit !== undefined ? request.query.limit : config.defaults.limit;

    let resultData = await getUserData(username);

    resultData.length = limit

    const rows = Math.ceil( resultData.length / config.max_cards_length_in_row )
    const width = rows * config.card.offsetWidth
    const height = Math.max( resultData.length, config.max_cards_length_in_row ) * config.card.offsetHeight
    let result = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="${width}"
      version="1.2"
      height="${height}"
    >`;

    let row = 0
    await asyncForEach(resultData, async (blog, index) => {
      const blogCardObj = await blogCard(blog);
      const indexInRow = index - (row * config.max_cards_length_in_row)
      let x = row * config.card.offsetWidth
      let y = indexInRow * config.card.offsetHeight
      result += `<g transform="translate(${x + config.card.margin},${y + config.card.margin})">${blogCardObj}</g>`;
      if ( indexInRow === 4 ) row += 1
    });

    result += `</svg>`;
    response.writeHead(200, { "Content-Type": "image/svg+xml" });
    response.write(result);
    response.end();
  } catch (error) {
    console.log(error);
    response.send("Error while fetching the data" + error);
  }
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
