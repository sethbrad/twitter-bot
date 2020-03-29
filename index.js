var Twit = require('twit')
var T = new Twit({
	consumer_key:	'JZugqdhxXpbqCZhLHwoitWlkO',
	consumer_secret:	'P52woav6m1hA0y0MeFMznvDhlzwoXDRHJ16TtnqWe05w31QPWf',
	access_token:	'1193625886597140480-yxG1FYX3PoHMBOOPn6YbjPn6cuTSzO',
	access_token_secret: '6OnyASSN2Ybk0MznEfYp6JsgsN5ZS41w0XoEx2TzFYumu',
})

var users = ['4487616860'];
var stream = T.stream('statuses/filter', {follow: users});

stream.on('tweet', function (tweet) {
	if (users.indexOf(tweet.user.id_str) > -1) {
		console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    }
})