Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
};
var request = require("request");
var prompt = require("prompt");
prompt.start();
prompt.get(["city"], function(err,result){
    if (err) {
        return "Error";
    }
    var personLatLon = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.city;
    request(personLatLon, function(req,data){
        var personLatLonData = JSON.parse(data.body);
        var lat1 = personLatLonData.results[0].geometry.location.lat;
        var lon1 = personLatLonData.results[0].geometry.location.lng;
        var iss = "http://api.open-notify.org/iss-now.json";
        request(iss, function(req,data){
            var issData = JSON.parse(data.body);
            var lon2 = issData.iss_position.longitude;
            var lat2 = issData.iss_position.latitude;
            var distance = calcDifference(lon1, lon2, lat1, lat2);
            console.log(distance)
});
    })});
     
function calcDifference(lon1, lon2, lat1, lat2){
    var R = 6371000; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    return d;
};



