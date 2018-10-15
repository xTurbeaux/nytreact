const axios = require("axios");
const helper = {
 runQuery: function(topic, yearStart, yearEnd) {
   const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "97465cece832491fa3bc26a21108435b",
        'q': topic,
        'begin_date': yearStart + "0101",
        'end_date': yearEnd + "0101",
    });

    return axios.get(url).then(function(response) {
      const returnedArticles = response.data.response.docs;
      const articleArray = [];
            if (returnedArticles) {
        for (const i = 0; i < 5; i++) {
          const articleObject = {
             title: returnedArticles[i].headline.main,
             date: returnedArticles[i].pub_date,
             turl: returnedArticles[i].web_url
          }
           articleArray.push(articleObject);

        }    return articleArray;
      }    return "";
    });
  },  

  getSavedArticles: function() {
    return axios.get("/api/saved");
  },
  
  postSavedArticles: function(article) {
    return axios.post("/api/saved", { article: article });
  },

  deleteSavedArticle: function(article) {
    return axios.delete("/api/saved", { data: {article: article }});
  }
};

module.exports = helper;