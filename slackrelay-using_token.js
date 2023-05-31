//This code will connect to an IRC server and join a channel. 
// When a message is received in the channel, it will be relayed to a Slack channel. 
//You will need to set the SLACK_TOKEN environment variable to your Slack API token.

const irc = require('irc');
const slack = require('slack-node');

const client = new irc.Client();
const slackClient = new slack.Client({
  token: process.env.SLACK_TOKEN,
});

client.on('message', function(channel, user, message) {
  slackClient.chat.postMessage({
    channel: '#general',
    text: message,
  });
});

client.connect('irc.freenode.net', 6667, 'username', 'password');
client.join('#channel');
