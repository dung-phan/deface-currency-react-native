const twilio = require("twilio");

const accountSid = "AC2cf6ea1fd1446d1b2351ceb754c67f85";
const authToken = "48297ddd462ce5f3dd4fefc7b9335985";

module.exports = new twilio.Twilio(accountSid, authToken);
