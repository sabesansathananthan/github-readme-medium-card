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

    const style = `
      max-height:${config.card.offsetHeight * config.max_cards_length_in_row}px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    `
    let result = `<div style='${style}'>`;

    await asyncForEach(resultData, async (blog, index) => {
      result += await blogCard(blog);
    });

    result += `</div>`;
    response.writeHead(200, { "Content-Type": "text/html" });
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
