// Main Variables
var bridge_online_hello = "relay bridge online"
var debug_setting = "false"

// FREENODE
var irc_freenode_server = 'irc.freenode.net'
var irc_freenode_user = 'password'   //this is where you enter your user id'
var irc_freenode_password = 'password'  //this is where you enter your password'
var irc_freenode_chan_defcon = '#defcontest'
var irc_freenode_chan_412 = '#dc412'
var irc_freenode_chan_559 = '#dc559'
var irc_freenode_chan_612 = '#dc612'
var irc_freenode_chan_919 = '#defcon919'
var irc_freenode_friendlyname = "freenode"

// DEFCON SLACK
var slack_defcon_server = 'defcongroups.irc.slack.com'
var slack_defcon_friendlyname = 'dcg'
var slack_defcon_user = 'dcgbot'
var slack_defcon_password = "password"  //this is where you enter your password, found in slack"
var slack_defcon_chan_general = '#test'
var slack_defcon_chan_919 = '#dc919'

// OWASP SLACK
var slack_owasp_server = 'owasp.irc.slack.com'
var slack_owasp_friendlyname = 'owasp'
var slack_owasp_user = 'dcgbot'
var slack_owasp_password = "password"  //this is where you enter your password, found in slack"
var slack_owasp_chan_919 = '#defcon919'

// RTPSEC SLACK
var slack_rtpsec_server = 'rtpsecbeers.irc.slack.com'
var slack_rtpsec_friendlyname = 'rtpsec'
var slack_rtpsec_user = 'dcgbot'
var slack_rtpsec_password = "password" //this is where you enter your password, found in slack
var slack_rtpsec_chan_919 = '#defcon919'

// IRC.2600
var irc_2600_server = 'irc.scuttled.net'
var irc_2600_friendlyname = '2600'
var irc_2600_user = 'dcgbot'
var irc_2600_password = "password"  // Change password to your account password
var irc_2600_chan_919 = '#defcon919'



// #1 FROM FREENODE

var http = require('http'); var irc = require('irc'); var client1 = new irc.Client(irc_freenode_server, irc_freenode_user, {
  secure: true,
  port: 6697,
  debug: debug_setting,
  realName: 'defconslack.org',
  autoConnect: false,
  channels: [
		irc_freenode_chan_defcon,
		//irc_freenode_chan_412,
		//irc_freenode_chan_559,
		//irc_freenode_chan_612,
		irc_freenode_chan_919,

		],

  identify: irc_freenode_password
});
client1.connect(5, function(input) {
  console.log("===================================== IRC Freenode Connected! =====================================");
  client1.join(irc_freenode_chan_919, function(input) {

  });
});




// WHO JOINED?
//
client1.addListener("join", function(channel,who, message) {

    if (channel.indexOf(irc_freenode_chan_919) === 0) // it's a channel message, to contains the channel name
{
	//client1.say(irc_freenode_chan_919, who + " joined " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);  });
	client2.say(slack_defcon_chan_919, who + " joined " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
	client3.say(slack_owasp_chan_919, who + " joined " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
	client4.say(slack_rtpsec_chan_919, who + " joined " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
	client5.say(irc_2600_chan_919, who + " joined " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
}

if (channel.indexOf(irc_freenode_chan_defcon) === 0) // it's a channel message, to contains the channel name
{
client2.say(slack_defcon_chan_general, who + " joined " + irc_freenode_chan_defcon + " on " + irc_freenode_friendlyname);
}
});
// End of Room Joins


// Testing Leaving options
client1.addListener("part",  function(channel, who, reason, message) {
//client1.say(irc_freenode_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);

    if (channel.indexOf(irc_freenode_chan_919) === 0) // it's a channel message, to contains the channel name 
{ // leaving #1 open
client2.say(slack_defcon_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
client3.say(slack_owasp_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
client4.say(slack_rtpsec_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
client5.say(irc_2600_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);

} // leaving #1 close

if (channel.indexOf(irc_freenode_chan_defcon) === 0) // it's a channel message, to contains the channel name 
{ // leaving #2 open
client2.say(slack_defcon_chan_defcon, who + " has left " + irc_freenode_chan_defcon + " on " + irc_freenode_friendlyname);
} // leaing #2 close

});


client1.addListener("quit",  function(who, reason, channels, message) {

    if (channels.indexOf(irc_freenode_chan_919) === 0) // it's a channel message, to contains the channel name
{ // leaving #1 open

//client1.say(irc_freenode_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
client2.say(slack_defcon_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
client3.say(slack_owasp_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
client4.say(slack_rtpsec_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
client5.say(irc_2600_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + irc_freenode_friendlyname);
} // leaving #1 close

    if (channels.indexOf(irc_freenode_chan_defcon) === 0) // it's a channel message, to contains the channel name
{ // leaving #2 open
client2.say(slack_defcon_chan_defcon, who + " has left " + irc_freenode_chan_defcon + " on " + irc_freenode_friendlyname);
} // leaving #2 close

});
// End of Leaving


/// THIS IS LISTENING FOR EVERYTHING
	client1.addListener(('message'), function (from, to, text) {

    if (to.indexOf(irc_freenode_chan_919) === 0) // it's a channel message, to contains the channel name
{ // open function for defcon919 chat room
//
		// If message is not from bot, then post to other chat rooms
	  if(from !== irc_freenode_user) { // open function for stuff to say
	    client2.say(slack_defcon_chan_919, "[" + from + ', ' + irc_freenode_friendlyname + '] ' + " " + text);
	    client3.say(slack_owasp_chan_919, "[" + from + ', ' + irc_freenode_friendlyname + '] ' + " " + text);
	    client4.say(slack_rtpsec_chan_919, "[" + from + ', ' + irc_freenode_friendlyname + '] ' + " " + text);
	    client5.say(irc_2600_chan_919, "[" + from + ', ' + irc_freenode_friendlyname + '] ' + " " + text);
	  } // close function for stuff to say
//
} // close function for defcon919 room
//

// GOES INSIDE addListener 
// Communication Between #defcon on FREENODE and DCG Slack General
    if (to.indexOf(irc_freenode_chan_defcon) === 0) // it's a channel message 
{
if(from !== irc_freenode_user) {   // Verify you're not echoing the bot itself
            client2.say(slack_defcon_chan_general, "[" + from + ', ' + irc_freenode_friendlyname + '] ' + " " + text); // relay to dcg slack
} // close client.say
} // close if statement for the channel


}); // END of #1





// #2 FROM DEFCON SLACK

var client2 = new irc.Client(slack_defcon_server, slack_defcon_user, {
  secure: true,
  debug: debug_setting,
  autoConnect: false,
  password: slack_defcon_password
});
client2.connect(5, function(input) {
  console.log("===================================== DEFCON Slack Connected! =====================================");
  client2.join(slack_defcon_chan_919, function(input) {
  });
});



// WHO JOINED?
// 
client2.addListener("join", function(channel,who, message) {

// BEGIN OF CHANNEL

    if (channel.indexOf(slack_defcon_chan_919) === 0) // it's a channel message, to has the channel name
{

	console.log(irc_freenode_chan_919, who + " joined " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
        client1.say(irc_freenode_chan_919, who + " joined " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
        //client2.say(slack_defcon_chan_919, who + " joined " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
        client3.say(slack_owasp_chan_919, who + " joined " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
        client4.say(slack_rtpsec_chan_919, who + " joined " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
        client5.say(irc_2600_chan_919, who + " joined " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);

}

});
// End of Room Joins



// Testing Leaving options
client2.addListener("part",  function(channel, who, reason, message) {

// BEGIN OF CHANNEL

    if (channel.indexOf(slack_defcon_chan_919) === 0) // it's a channel message, to has the channel name
{
	client1.say(irc_freenode_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	//client2.say(slack_defcon_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	client3.say(slack_owasp_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	client4.say(slack_rtpsec_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	client5.say(irc_2600_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);

}	});


client2.addListener("quit",  function(who, reason, channel, message) {

// BEGIN OF CHANNEL

    if (channel.indexOf(slack_defcon_chan_919) === 0) // it's a channel message, to has the channel name
{
	console.log(irc_freenode_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	client1.say(irc_freenode_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	//client2.say(slack_defcon_chan_919, who + " has left " + irc_freenode_chan_919 + " on " + slack_defcon_friendlyname);
	client3.say(slack_owasp_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	client4.say(slack_rtpsec_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
	client5.say(irc_2600_chan_919, who + " has left " + slack_defcon_chan_919 + " on " + slack_defcon_friendlyname);
}
});
// End of Leaving




// DEFCON SLACK CHANNEL TRAFFIC

client2.addListener('message', function (from, to, text) {
  console.log("[" + from + ', ' + slack_defcon_friendlyname + '] ' + " " + ' => ' + to + ': ' + text);

// BEGIN OF CHANNEL

    if (to.indexOf(slack_defcon_chan_919) === 0) // it's a channel message, to has the channel name
{
	  if(from !== slack_defcon_user ) {
	    client1.say(irc_freenode_chan_919, "[" + from + ', ' + slack_defcon_friendlyname + '] ' + " " + text);
	    client3.say(slack_owasp_chan_919, "[" + from + ', ' + slack_defcon_friendlyname + '] ' + " " + text);
	    client4.say(slack_rtpsec_chan_919, "[" + from + ', ' + slack_defcon_friendlyname + '] ' + " " + text);
	    client5.say(irc_2600_chan_919, "[" + from + ', ' + slack_defcon_friendlyname + '] ' + " " + text);
	  }
// END OF CHANNEL FILTER
} // end of user filter


// GOES INSIDE addListener 
// Communication Between #defcon on FREENODE and DCG Slack General
    if (to.indexOf(slack_defcon_chan_general) === 0) // it's a channel message 
{
if(from !== irc_freenode_user) {   // Verify you're not echoing the bot itself
            client1.say(irc_freenode_chan_defcon, "[" + from + ', ' + slack_defcon_friendlyname + '] ' + " " + text); // relay to dcg slack

} // close client.say
} // close if statement for the channel




}); // END of #2


// #3 FROM OWASP SLACK

var client3 = new irc.Client(slack_owasp_server, slack_owasp_user, {
  secure: true,
  debug: debug_setting,
  autoConnect: false,
  password: slack_owasp_password
});
client3.connect(5, function(input) {
  console.log("===================================== OWASP Slack Connected! =====================================");
  client3.join(slack_owasp_chan_919, function(input) {
  });
});


// WHO JOINED?
// 
client3.addListener("join", function(channel,who, message) {

if (channel.indexOf(slack_owasp_chan_919) === 0) // it's a channel message, to contains the channel name
{

        client1.say(irc_freenode_chan_919, who + " joined " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
        client2.say(slack_defcon_chan_919, who + " joined " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
        //client3.say(slack_owasp_chan_919, who + " joined " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
        client4.say(slack_rtpsec_chan_919, who + " joined " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
        client5.say(irc_2600_chan_919, who + " joined " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
}
});
// End of Room Joins



// Testing Leaving options
client3.addListener("part",  function(channel, who, reason, message) {
if (channel.indexOf(slack_owasp_chan_919) === 0) // it's a channel message, to contains the channel name
{

client1.say(irc_freenode_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
client2.say(slack_defcon_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
//client3.say(slack_owasp_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
client4.say(slack_rtpsec_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
client5.say(irc_2600_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
}
});
client3.addListener("quit",  function(who, reason, channels, message) {
if (channels.indexOf(slack_owasp_chan_919) === 0) // it's a channel message, to contains the channel name
{
client1.say(irc_freenode_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
client2.say(slack_defcon_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
//client3.say(slack_owasp_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
client4.say(slack_rtpsec_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
client5.say(irc_2600_chan_919, who + " has left " + slack_owasp_chan_919 + " on " + slack_owasp_friendlyname);
}
});
// End of Leaving




//  OWASP ALL CHANNEL MESSAGES

client3.addListener('message', function (from, to, text) {
  console.log(from + ' => ' + to + ': ' + text);


// BEGIN OF OWASP CHANNEL

    if (to.indexOf(slack_owasp_chan_919) === 0) // it's a channel message, to has the channel name
{
	  if(from !== slack_defcon_user ) {
	    client1.say(irc_freenode_chan_919, "[" + from + ', ' + slack_owasp_friendlyname + '] ' + " " + text);
	    client2.say(slack_defcon_chan_919, "[" + from + ', ' + slack_owasp_friendlyname + '] ' + " " + text);
	    client4.say(slack_rtpsec_chan_919, "[" + from + ', ' + slack_owasp_friendlyname + '] ' + " " + text);
	    client5.say(irc_2600_chan_919, "[" + from + ', ' + slack_owasp_friendlyname + '] ' + " " + text);
	  }
// CLOSE OF CHANNEL FILTER
}

});


// #4 FROM RTPSEC SLACK

var client4 = new irc.Client(slack_rtpsec_server, slack_rtpsec_user, {
  secure: true,
  debug: debug_setting,
  autoConnect: false,
  password: slack_rtpsec_password,
  channels: [slack_rtpsec_chan_919]
});
client4.connect(5, function(input) {
  console.log("===================================== RTPSEC Slack Connected! =====================================");
  client4.join(slack_rtpsec_chan_919, function(input) {
  });
});


// WHO JOINED?
// 
client4.addListener("join", function(channel,who, message) {
if (channel.indexOf(slack_rtpsec_chan_919) === 0) // it's a channel message, to contains the channel name
{
        client1.say(irc_freenode_chan_919, who + " joined " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
        client2.say(slack_defcon_chan_919, who + " joined " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
        client3.say(slack_owasp_chan_919, who + " joined " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
        //client4.say(slack_rtpsec_chan_919, who + " joined " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
        client5.say(irc_2600_chan_919, who + " joined " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
}
});
// End of Room Joins


// Testing Leaving options
client4.addListener("part",  function(channel, who, reason, message) {
if (channel.indexOf(slack_rtpsec_chan_919) === 0) // it's a channel message, to contains the channel name
{

client1.say(irc_freenode_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
client2.say(slack_defcon_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
client3.say(slack_owasp_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
//client4.say(slack_rtpsec_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
client5.say(irc_2600_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
}
});
client4.addListener("quit",  function(who, reason, channel, message) {
if (channel.indexOf(slack_rtpsec_chan_919) === 0) // it's a channel message, to contains the channel name
{
client1.say(irc_freenode_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
client2.say(slack_defcon_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
client3.say(slack_owasp_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
//client4.say(slack_rtpsec_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
client5.say(irc_2600_chan_919, who + " has left " + slack_rtpsec_chan_919 + " on " + slack_rtpsec_friendlyname);
}
});
// End of Leaving





// RTPSEC ALL MESSAGES

client4.addListener('message', function (from, to, text) {
console.log(from + ' => ' + to + ': ' + text);

// BEGIN OF CHANNEL

    if (to.indexOf(slack_rtpsec_chan_919) === 0) // it's a channel message, to has the channel name
{
    // ...

	  if(from !== slack_rtpsec_user ) {
	    client1.say(irc_freenode_chan_919, "[" + from + ', ' + slack_rtpsec_friendlyname + '] ' + " " + text);
	    client2.say(slack_defcon_chan_919, "[" + from + ', ' + slack_rtpsec_friendlyname + '] ' + " " + text);
	    client3.say(slack_owasp_chan_919, "[" + from + ', ' + slack_rtpsec_friendlyname + '] ' + " " + text);
	    client5.say(irc_2600_chan_919, "[" + from + ', ' + slack_rtpsec_friendlyname + '] ' + " " + text);
	  }

// END OF CHANNEL
}


	});


// #5 FROM 2600

var client5 = new irc.Client(irc_2600_server, irc_2600_user, {
  secure: true,
  port: 6697,
  debug: debug_setting,
  realName: 'defconslack.org',

  autoConnect: false,
  password: irc_2600_password
});
client5.connect(5, function(input) {
  console.log("===================================== 2600 IRC Connected! =====================================");
  client5.join(irc_2600_chan_919, function(input) {
  });
});

// WHO JOINED?
// 
client5.addListener("join", function(channel,who, message) {
if (channel.indexOf(irc_2600_chan_919) === 0) // it's a channel message, to contains the channel name
{
        client1.say(irc_freenode_chan_919, who + " joined " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
        client2.say(slack_defcon_chan_919, who + " joined " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
        client3.say(slack_owasp_chan_919, who + " joined " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
        client4.say(slack_rtpsec_chan_919, who + " joined " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
        //client5.say(irc_2600_chan_919, who + " joined " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
}
});
// End of Room Joins

// Testing Leaving options
client5.addListener("part",  function(channel, who, reason, message) {
if (channel.indexOf(irc_2600_chan_919) === 0) // it's a channel message, to contains the channel name
{
client1.say(irc_freenode_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
client2.say(slack_defcon_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
client3.say(slack_owasp_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
client4.say(slack_rtpsec_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
//client5.say(irc_2600_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
}
});
client5.addListener("quit",  function(who, reason, channel, message) {
if (channel.indexOf(irc_2600_chan_919) === 0) // it's a channel message, to contains the channel name
{
client1.say(irc_freenode_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
client2.say(slack_defcon_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
client3.say(slack_owasp_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
client4.say(slack_rtpsec_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
//client5.say(irc_2600_chan_919, who + " has left " + irc_2600_chan_919 + " on " + irc_2600_friendlyname);
}
});
// End of Leaving



// 2600 CHAT MESSAGES
client5.addListener('message', function (from, to, text) {
if (to.indexOf(slack_rtpsec_chan_919) === 0) // it's a channel message, to contains the channel name
{
  console.log(from + ' => ' + to + ': ' + text);
  if(from !== irc_2600_user ) {
    client1.say(irc_freenode_chan_919, "[" + from + ', ' + irc_2600_friendlyname + '] ' + " " + text);
    client2.say(slack_defcon_chan_919, "[" + from + ', ' + irc_2600_friendlyname + '] ' + " " + text);
    client3.say(slack_owasp_chan_919, "[" + from + ', ' + irc_2600_friendlyname + '] ' + " " + text);
    client4.say(slack_rtpsec_chan_919, "[" + from + ', ' + irc_2600_friendlyname + '] ' + " " + text);
  }
}
});
