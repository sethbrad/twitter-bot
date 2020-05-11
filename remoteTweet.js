var Twit = require('twit');
var T = new Twit({
	consumer_key:	'JZugqdhxXpbqCZhLHwoitWlkO',
	consumer_secret:	'P52woav6m1hA0y0MeFMznvDhlzwoXDRHJ16TtnqWe05w31QPWf',
	access_token:	'1193625886597140480-yxG1FYX3PoHMBOOPn6YbjPn6cuTSzO',
	access_token_secret: '6OnyASSN2Ybk0MznEfYp6JsgsN5ZS41w0XoEx2TzFYumu',
})

//empty string for tweet input
var input = "";

//iterate through command line args to get tweet
for (i = 2; i < process.argv.length; i++) {
  input += process.argv[i] + ' ';
}

T.post('statuses/update', { status: input }, function(err, data, response) {
  console.log(data)
})
