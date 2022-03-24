const router = require('express').Router();
const needle = require('needle');
const url = require('url');

// // env variables
// const API_BASE_URL = process.env.API_BASE_URL;
// const API_KEY_NAME = process.env.API_KEY_NAME;
// const API_KEY_VALUE = process.env.API_KEY_VALUE;
const API_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY_NAME = "apiKey";
const API_KEY_VALUE = "baee51bfa3ab4d96aad7b37ff18176a4";

router.get('/', async (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", `${API_BASE_URL}`)
    try {
        console.log(url.parse(req.url, true).query);
        console.log(API_BASE_URL, API_KEY_NAME, API_KEY_VALUE);
        const params = new URLSearchParams({
            ...url.parse(req.url, true).query
            // [API_KEY_NAME]: API_KEY_VALUE
            })
        const apiKey = new URLSearchParams({
                [API_KEY_NAME]: API_KEY_VALUE
                })
                console.log(apiKey);

        const apiRes = await needle('get', `${API_BASE_URL}?${params}&${apiKey}`)
        const data = apiRes.body

// log request to public API in development stage
        if(process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: ${API_BASE_URL}?${params}&${apiKey}`)
        }
        console.log(data);
        res.status(200).json(data)

    } catch (err) {
        res.status(500).json({err})
    }
    })
module.exports=router