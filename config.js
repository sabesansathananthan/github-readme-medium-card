global.config = {
  default: {
    limit: 10,
    margin_left: 10,
    margin_top: 10,
  },
  card: {
    width: 370,
    height: 105,
    border_width: 1, //stroke-opacity
    border_radius: 4.5,
    spacing: 10,
    image_mask: {
      width: 110,
      height: 101,
      x: 2,
      y: 2,
    },
    image: {
      width: 115 * 2,
      height: 110 * 2,
      x: -50,
      y: -57,
    },
    title: {
      x: 120,
      y: 0,
    },
    author: {
      x: 120,
      y: 0,
      font_size: 14,
    },
    date: {
      x: 120,
      y: 0,
      font_size: 13,
    },
  },
  themes: {
    default: "light",
    light: {
      title_color: "#000",
      author_color: "#000",
      date_color: "#000",
      bg_color: "#FFF",
      border_color: "#E4E2E2",
    },
    dark: {
      title_color: "#FFF",
      author_color: "#9F9F9F",
      date_color: "#79FF97",
      bg_color: "#151515",
      border_color: "#E4E2E2",
    },
    dracula: {
      title_color: "#FF6E96",
      author_color: "#F8F8F2",
      date_color: "#79DAFA",
      bg_color: "#282A36",
      border_color: "#E4E2E2",
    },
  },
};
