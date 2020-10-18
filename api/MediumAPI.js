const axios = require("axios");
const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@";

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

module.exports = { getUserData };
