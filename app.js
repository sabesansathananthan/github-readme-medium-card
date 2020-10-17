require('./config');

var express = require("express");
var app = express();
app.use(express.json());
const axios = require("axios");
const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@";
const blogCard = require("./blogCard");

const getUserData = async (username) => {
  try {
    const result = await axios.get(mediumURL + username);
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

const asyncForEach = async (array, settings, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, settings, array);
  }
};

app.get("/getMediumBlogs", async (request, response) => {
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
    const offset = request.query.offset || 0;
    const width = request.query.width || config.card.width;
    const height = request.query.height || config.card.height;
    const limit = (request.query.limit<=10)?request.query.limit:false || config.default.limit;
    const submittedCache = request.query.cache_seconds || config.default.cache_seconds.min;

    request.query.width = width;
    request.query.height = height;

    const resultData = await getUserData(username);
    let result = `<svg>`;

    if(resultData.length < limit) limit = resultData.length

    result = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="${((limit==1)?width:2*width)+config.default.margin_left+config.card.spacing}" 
              version="1.2" 
              height="${ (((Math.round(limit/2))*height)+config.default.margin_top*2+config.card.spacing*(Math.floor(limit/2))) }"
              viewBox="0 0 ${((limit==1)?width:2*width)+config.default.margin_left+config.card.spacing} ${ (((Math.round(limit/2))*height)+config.default.margin_top*2+config.card.spacing*(Math.floor(limit/2))) }">`;
    await asyncForEach(resultData, request.query, async (blog, index, settings) => {
      if (index >= limit || index <= offset) {
        return;
      }
      const blogCardObj = await blogCard(blog, settings, index);
      result += `<g requiredFeatures="http://www.w3.org/Graphics/SVG/feature/1.2/#TextFlow" transform="translate(${
        ((index%2) ?  width+config.card.spacing : 0)+config.default.margin_left
      }, ${ (Math.floor(index/2)*height)+config.default.margin_top+((index>1)?config.card.spacing*(Math.floor(index/2)):0) })">${blogCardObj}</g>`;
    });
  
    result += `</svg>`;

    var cacheInSeconds = Math.max(config.default.cache_seconds.min, Math.min(submittedCache, config.default.cache_seconds.max));

    response.writeHead(200, 
      { "Content-Type": "image/svg+xml" },
      { "Cache-Control": `public, max-age=${cacheInSeconds}` }
    );

    response.write(result);
    response.end();
  } catch (error) {
    console.log(error);
    response.send("Error while fetching the data" + error);
  }
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server listening " + port);
});
