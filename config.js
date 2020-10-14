global.config = {
    medium_API_URL : 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@',

    card : {
        width : 370,
        height : 105,
        margin : 5,
        image : {
            width : 110,
        }
    },
    
    themes : {
        current : 'white',
        white : {
            text_color : '#000',
            background : '#fff',
            border_color : '#e1e4e8'
        },
        dark : {
            text_color : '#fff',
            background : '#000',
            border_color : '#e1e4e8'
        }
    },

    defaults : {
        limit : 10
    },

    max_cards_length_in_row : 4
}

config.card.offsetWidth = config.card.width + config.card.margin
config.card.offsetHeight = config.card.height + config.card.margin