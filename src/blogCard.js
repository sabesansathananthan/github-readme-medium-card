require("./config");
const { imgToDataURL, dateFormat } = require("./utils");

const blogCard = async (data, settings, index) => {
  const result = await imgToDataURL(data.thumbnail);
  const blogImage = "data:image/png;base64," + result.toString("base64");
  const blogDate = await dateFormat(data.pubDate);
  const blogLink = data.link;

  var selected_theme = config.themes.default;

  if (settings.theme && config.themes[settings.theme])
    selected_theme = settings.theme;

  var border_width = config.card.border_width;
  var border_radius = config.card.border_radius + "px";
  var width = settings.width;
  var height = settings.height;
  var bg_color = settings.bg_color || config.themes[selected_theme].bg_color;

  var image_mask = {
    background: settings.image_background || config.card.image_mask.background,
    height: settings.image_height || config.card.image_mask.height,
    width: settings.image_width || config.card.image_mask.width,
    x: settings.image_x || config.card.image_mask.x,
    y: settings.image_y || config.card.image_mask.y,
  };

  var image = {
    height: settings.image_height || config.card.image.height,
    width: settings.image_width || config.card.image.width,
    x: settings.image_x || config.card.image.x,
    y: settings.image_y || config.card.image.y,
  };

  var title = {
    color: settings.title_color || config.themes[selected_theme].title_color,
    x: settings.title_x || config.card.title.x,
    y: settings.title_y || config.card.title.y,
  };

  var author = {
    color: settings.author_color || config.themes[selected_theme].author_color,
    x: settings.author_x || config.card.author.x,
    y: settings.author_y || config.card.author.y,
    font_size: settings.author_font_size || config.card.author.font_size,
  };

  var date = {
    color: settings.date_color || config.themes[selected_theme].date_color,
    x: settings.date_x || config.card.date.x,
    y: settings.date_y || config.card.date.y,
    font_size: settings.date_font_size || config.card.date.font_size,
  };

  bg_color = config.themes[selected_theme].bg_color;
  border_color = config.themes[selected_theme].border_color;

  var max_characters = 30;
  var character_tracker = 0;
  var array_holder = [];
  var title_string = "";
  var word_array = data.title.split(" ");
  var total_words = word_array.length;
  var line_tracker = 0;
  var max_lines = 2;

  try {
    word_array.forEach((word, index) => {
      if (
        word.length + character_tracker <=
        max_characters - array_holder.length
      ) {
        character_tracker += word.length;
        array_holder.push(word);
        if (total_words == index + 1) {
          title_string += `<tspan x="0" dy="1.2em">${array_holder.join(
            " "
          )}</tspan>`;
        }
      } else {
        line_tracker++;
        title_string += `<tspan x="0" dy="1.2em">${
          array_holder.join(" ") + (line_tracker == max_lines ? "..." : "")
        }</tspan>`;
        if (line_tracker == max_lines) throw "";
        array_holder = [];
        character_tracker = 0;
        character_tracker += word.length;
        array_holder.push(word);
        if (total_words == index + 1) {
          title_string += `<tspan x="0" dy="1.2em">${array_holder.join(
            " "
          )}</tspan>`;
        }
      }
    });
  } catch (_) {}

  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="${height}px" width="${width}px" version="1.2">
    <defs>
      <!-- define lines for text lies on -->
      <path id="blogName" d="M0,20 H235 M0,35 H235 M0,50 H240 M0,65 H235">     </path>
      <path id="blogAuthor" d="M0,80 H230 "></path>
      <path id="blogDate" d="M0,95 H230 "></path>

      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:${bg_color};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${bg_color};stop-opacity:1" />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:${image_mask.background};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${image_mask.background};stop-opacity:1" />
      </linearGradient>

      <clipPath id="clip">
        <use xlink:href="#rect"/>
      </clipPath>

      <pattern id="img${index}" patternUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
        <image xlink:href="${blogImage}" x="${image.x}" y="${image.y}" height="${image.height}px" width="${image.width}px" />
      </pattern>
    </defs>

    <use xlink:href="#rect" stroke-width="2" stroke="black"/>

    <a href="${blogLink}" target="_blank">

    <rect id="rect" x="0" y="0" width="100%" height="100%" style="fill:url(#grad1);ry:${border_radius};stroke-opacity:${border_width};stroke:${border_color}"></rect>

    <text transform="translate(${title.x},${title.y})" fill="${title.color}" font-size="15" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-weight="bold">
      ${title_string}
    </text>
    <rect clip-path="url(#clip)" x="${image_mask.x}" y="${image_mask.y}" height="${image_mask.height}px" width="${image_mask.width}px" style="fill:url(#img${index});"></rect>

    <text transform="translate(${author.x},${author.y})" fill="${author.color}" font-size="${author.font_size}" font-family="'Segoe UI', Ubuntu, Sans-Serif">
      <textPath xlink:href="#blogAuthor">${data.author}</textPath>
    </text>
    <text transform="translate(${date.x},${date.y})" fill="${date.color}" font-size="${date.font_size}" font-family="'Segoe UI', Ubuntu, Sans-Serif">
      <textPath xlink:href="#blogDate">${blogDate}</textPath>
    </text>
    </a>
    </svg>
    `;
};

module.exports = blogCard;
