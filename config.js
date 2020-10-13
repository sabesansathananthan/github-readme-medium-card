global.config = {
    default: {
        limit: 10,
        margin_left: 10,
        margin_top: 10 
    },
    card: {
        width: 370,
        height: 150,
        border_width: 3,
        border_radius: 6,
        spacing: 10,
        image: {
            height: 120,
            width: 120,
            x: 5,
            y: 15
        },
        title: {
            x: 130,
            y: 10 
        },
        author: {
            x: 130,
            y: 30,
            font_size: 14
        },
        date: {
            x: 130,
            y: 30,
            font_size: 13
        }
    },
    themes: {
        default: "light",
        light: {
            title_color: "#000",
            author_color: "#000",
            date_color: "#000",
            bg_color: "#FFF",
            border_color: "#FFE4E8"
        }, 
        dark: {
            title_color: "#FFF",
            author_color: "#FFF",
            date_color: "#FFF",
            bg_color: "#000",
            border_color: "#FFF"
        }, 
        dracula: {
            title_color: "#A0506C",
            author_color: "#FFF",
            date_color: "#FFF",
            bg_color: "#282A36",
            border_color: "#A0506C"
        }
    }
};