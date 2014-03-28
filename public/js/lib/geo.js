function geoFindMe() {

var config = {
apiKey: 'OUZWCMD3MYTVZQEA1P3RDHYAMECBHZ2POAL5D4XIYVIO3HEC',
authUrl: 'https://foursquare.com/',
apiUrl: 'https://api.foursquare.com/'
};

 /* Attempt to retrieve access token from URL. */
function doAuthRedirect() {
var redirect = window.location.href.replace(window.location.hash, '');
var url = config.authUrl + 'oauth2/authenticate?response_type=token&client_id=' + config.apiKey +
'&redirect_uri=' + encodeURIComponent(redirect) +
'&state=' + encodeURIComponent($.bbq.getState('req') || 'users/self');
window.location.href = url;
};

if ($.bbq.getState('access_token')) {
// If there is a token in the state, consume it
var token = $.bbq.getState('access_token');
$.bbq.pushState({}, 2)
} else if ($.bbq.getState('error')) {
} else {
doAuthRedirect();
}
}


function getFoursquareVenues() {

var config = {
apiKey: 'OUZWCMD3MYTVZQEA1P3RDHYAMECBHZ2POAL5D4XIYVIO3HEC',
authUrl: 'https://foursquare.com/',
apiUrl: 'https://api.foursquare.com/'
};

 /* Attempt to retrieve access token from URL. */
function doAuthRedirect() {
var redirect = window.location.href.replace(window.location.hash, '');
var url = config.authUrl + 'oauth2/authenticate?response_type=token&client_id=' + config.apiKey +
'&redirect_uri=' + encodeURIComponent(redirect) +
'&state=' + encodeURIComponent($.bbq.getState('req') || 'users/self');
window.location.href = url;
};

if ($.bbq.getState('access_token')) {
// If there is a token in the state, consume it
var token = $.bbq.getState('access_token');
$.bbq.pushState({}, 2)


} else if ($.bbq.getState('error')) {
} else {
doAuthRedirect();
}



  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);


 var config = {
apiKey: 'OUZWCMD3MYTVZQEA1P3RDHYAMECBHZ2POAL5D4XIYVIO3HEC',
authUrl: 'https://foursquare.com/',
apiUrl: 'https://api.foursquare.com/'
};
 
 
/* Query foursquare API for venue recommendations near the current location. */
$.getJSON(config.apiUrl + 'v2/venues/explore?v=20140128&ll=' + latitude + ',' + longitude + '&oauth_token=' + token, { limit: 20 }, function(data) {
venues = data['response']['groups'][0]['items'];
/* Place marker for each venue. */
/* Place marker for each venue. */
for (var i = 0; i < venues.length; i++) {
/* Get marker's location */
var latLng = new L.LatLng(
venues[i]['venue']['location']['lat'],
venues[i]['venue']['location']['lng']
);
}
})




};

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

}
