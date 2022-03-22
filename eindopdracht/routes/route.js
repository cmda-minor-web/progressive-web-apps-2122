
const process = require("process")
const express = require("express")
const app = express()
require('dotenv').config()


//Home Page route
router.get("/", function (req, res) {
  res.render("pages/index", {
    title: "Home page",
  });
});

// router.post("/search", async(req, res) => {
//   //const query = req.body.SearchQueryFromInput
//   const apiKey = process.env.API_KEY

//   const apiURL = `http://www.omdbapi.com/?apikey=`+ apiKey +`&`
// })


//route for 404 page
router.get("*", function (req, res) {
    res.render("pages/404", {
      title: "404 Page",
    });
  });


module.exports = router;

