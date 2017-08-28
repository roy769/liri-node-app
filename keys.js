console.log('this is loaded');
//copied from gitlab
exports.twitterKeys = {
  consumer_key: '<qrXc33Vs6wtgkgaMaxTzmvynK>',
  consumer_secret: '<	f4johO1wYjdRUA7WvE32KMiDP56V1e3FAwwaDcgUgKEWgzpFBp
>',
  access_token_key: '<	901233029896478721-2ZLgA5XlUNgPAKA6EQWjpmfxiUguscx>',
  access_token_secret: '<	mDKloN5R7cLSsaEisM1rfmJVNkGl7NH8p1VvTdDYrgozQ>',
}

//copied from https://www.npmjs.com/package/twitter
var Twitter = require('twitter');
//twatter key = qrXc33Vs6wtgkgaMaxTzmvynK
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data);
});
