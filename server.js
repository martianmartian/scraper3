var express = require('express');
var app = express();
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

app.get('/scrape',function(req,res){

  // url = "http://www.musicgenreslist.com";
  url = "http://www.imdb.com/title/tt1229340/";
  request(url,function(error,response,html){
    if(!error){
      var $ = cheerio.load(html);

      var title,release,rating;
      var json = {title:"",release:"",rating:""};

      $('.header').filter(function(){
        title= $(this).children().first().text();
        json.title = title;
      })
    };
    fs.writeFile('output.json',JSON.stringify(json,null,4),function(error){
      console.log("replace this line with any function");
    })
  res.send('check if you see the output.json in the file')
  })
})

app.listen(8081);

console.log("it's going on at 8081")

exports = module.exports = app;