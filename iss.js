var request = require("request");
var iss = "http://api.open-notify.org/iss-now.json";

request(iss, function(req,data){
    var issData = JSON.parse(data.body);
    console.log("Current longitude:" + (Math.round((issData.iss_position.longitude)*100)/100) + "Current latitude:" + (Math.round((issData.iss_position.latitude)*100)/100));
    //console.log("Current longitude:" + issData.iss_position.longitude + "Current latitude:" + issData.iss_position.latitude);
});
