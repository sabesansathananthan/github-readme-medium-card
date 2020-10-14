const axios = require("axios");

const getBase64 = async (url) => {
  return await axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      Buffer.from(response.data, "binary").toString("base64")
    );
};

const blogCard = async (data) => {
  const currentTheme = config.themes[ config.themes.current ]
  const blogImage = await getBase64(data.thumbnail);
  const blogDate = new Date(data.pubDate).toLocaleString("default", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const blogLink = data.link;
  const styles = {
    
    card : `
      display: flex;
      margin: ${config.card.margin}px;
      width: ${config.card.width}px;
      height: ${config.card.height}px;
      border: 1px solid ${currentTheme.border_color};
      overflow: hidden;
      border-radius: 5px;
      text-decoration: none;
      color: ${currentTheme.text_color};
      background-color: ${currentTheme.background}
    `,

    card__image : `
      width : ${config.card.image.width};
      height : 100%;
    `,

    card__details : `
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,

    card__title : `
      font-weight: bold;
    `,

    card__author : `
      font-size: 13px;
    `,

    card__date : `
      font-size: 12px;
    `
  }
  return `
    <a href='${blogLink}' style='${styles.card}'>
      <img style='${styles.card__image}' src='data:image/png;base64,${blogImage}'/>
      <div style='${styles.card__details}' >
        <div style='${styles.card__title}'>${data.title}</div>
        <div class='card__footer'>
          <div class='card__author'>${data.author}</div>
          <div class='card__date'>${blogDate}</div>
        </div>
      </div>
    </a>
  `;
};

module.exports = blogCard;
