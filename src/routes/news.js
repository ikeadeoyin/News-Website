const express = require("express");
const newsRouter = express.Router();
const axios = require("axios"); 

const username = "oyinolatunji"


newsRouter.get("",  (req, res) =>{
    axios.get(`https://dev.to/api/articles`)
     .then(result => {
     console.log("gotten")
     const newsAPI = result.data
    res.render("news", {articles :newsAPI})
    // res.render(newsAPI)
    // console.log(newsAPI)
    })
     .catch(err =>
      console.log(err.req))

    
 })

module.exports = newsRouter;