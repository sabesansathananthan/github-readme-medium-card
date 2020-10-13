global.config = {
    medium_API_URL : 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@',

    card : {
        width : 370,
        height : 105,
        margin : 5,
        image : {
            width : 110,
            height : 85
        }
    },
    
    themes : {
        current : 'white',
        white : {
            text : '#000',
            background : '#fff',
            stroke : '#e1e4e8'
        },
        dark : {
            text : '#fff',
            background : '#000',
            stroke : '#e1e4e8'
        }
    },

    defaults : {
        limit : 10
    },

    max_cards_length_in_row : 5
}

config.card.offsetWidth = config.card.width + config.card.margin
config.card.offsetHeight = config.card.height + config.card.margin