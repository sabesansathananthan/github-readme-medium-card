require('./config');
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

const blogCard = async (data, settings) => {
  const blogImage = await getBase64(data.thumbnail);
  const blogDate = new Date(data.pubDate).toLocaleString("default", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const blogLink = data.link;

  var selected_theme = config.themes.default;

  if(settings.theme && config.themes[settings.theme]) selected_theme = settings.theme; 

  var border_width = config.card.border_width;
  var border_radius = config.card.border_radius+"px";
  var width = settings.width;
  var height = settings.height;
  var bg_color = settings.bg_color || config.themes[selected_theme].bg_color;
  
  var image = {
    background: settings.image_background || config.card.image.background,
    height: settings.image_height || config.card.image.height,
    width: settings.image_width || config.card.image.width,
    x: settings.image_x || config.card.image.x,
    y: settings.image_y || config.card.image.y
  };

  var title = {
    color: settings.title_color || config.themes[selected_theme].title_color,
    x: settings.title_x || config.card.title.x,
    y: settings.title_y || config.card.title.y
  };

  var author = {
    color: settings.author_color || config.themes[selected_theme].author_color,
    x: settings.author_x || config.card.author.x,
    y:  settings.author_y || config.card.author.y,
    font_size: settings.author_font_size || config.card.author.font_size
  };

  var date = {
    color: settings.date_color || config.themes[selected_theme].date_color,
    x: settings.date_x || config.card.date.x,
    y:  settings.date_y || config.card.date.y,
    font_size: settings.date_font_size || config.card.date.font_size
  };

  bg_color = config.themes[selected_theme].bg_color;
  border_color = config.themes[selected_theme].border_color;

  return `
    <svg height="${height}px" width="${width}px">
    <defs>
    <!-- define lines for text lies on -->
    <path id="blogName" d="M0,20 H235 M0,35 H235 M0,50 H240 M0,65 H235">     </path>
      <path id="blogAuthor" d="M0,80 H230 ">     
      </path>
      <path id="blogDate" d="M0,95 H230 ">     
      </path>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${bg_color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${bg_color};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" style="stop-color:${image.background};stop-opacity:1" />
    <stop offset="100%" style="stop-color:${image.background};stop-opacity:1" />
  </linearGradient>
   </defs>
   <a href="${blogLink}" target="_blank">
   <rect x="0" y="0" width="100%" height="100%" style="fill:url(#grad1);ry:${border_radius};stroke-width:${border_width};stroke:${border_color}"></rect>
   <text transform="translate(${title.x},${title.y})" fill="${title.color}" font-size="13" font-family="Arial, Helvetica, sans-serif" font-weight="bold">
    <textPath xlink:href="#blogName">${data.title}</textPath>
   </text>
   <rect x="${image.x}" y="${image.y}" height="${image.height}px" width="${image.width}px" style="fill:url(#grad2);stroke-width:0.5;stroke:rgb(255,255,255)"></rect>
       <image xlink:href="data:image/png;base64,${blogImage}" x="${image.x}" y="${image.y}" height="${image.height}px" width="${image.width}px" />
   <text transform="translate(${author.x},${author.y})" fill="${author.color}" font-size="${author.font_size}">
    <textPath xlink:href="#blogAuthor">${data.author}</textPath>
   </text>
   <text transform="translate(${date.x},${date.y})" fill="${date.color}" font-size="${date.font_size}">
    <textPath xlink:href="#blogDate">${blogDate}</textPath>
   </text>
   </a>
  </svg>
    `;
};

module.exports = blogCard;
