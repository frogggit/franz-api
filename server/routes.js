var routes = function(app) {
  /*
  app.get("/", function(req, res) {
    res.send("<h1>franz</h1><p>eep! you found my api. nothing much to see here tho!");
    console.log("Received GET");
  });
  */


  app.post("/test", function(req, res) {
    return res.send(100).json({"status": "passed", "message": "test passed wohoo"});
  });
  

  app.get("/test", function(req, res) {
    var dummyData = {
      "username": "testUser",
      "data": "1234"
    };
    console.log("Received GET: "+JSON.stringify(req.body));
    if(!req.query.username | !req.query.bosy) {
      return res.status(400).json({"status": "error", "message": "no headers"});
    } else if(!req.query.username) {
      return res.status(400).json({"status": "error", "message": "no username"});
    } else if(!req.query.data) {
      return res.status(400).json({"status": "error", "message": "no body"});
    } else if(req.query.username != dummyData.username) {
      return res.status(400).json({"status": "error", "message": "wrong username"});
    } else if(req.query.body != dummyData.body) {
      return res.status(400).json({"status": "error", "message": "wrong body"});
    }  else {
      return res.status(200).send(dummyData);
    }
  });  
};
 
module.exports = routes;