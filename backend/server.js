const express = require('express')
const app = express()

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
  params: {id: '33'},
  headers: {
    'X-RapidAPI-Key': '08fafae012msh3b9e7a1149fe721p1f308bjsncfde57608a9d',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error("..");
});


app.listen(3000, () => {
    console.log('server run3000')
})