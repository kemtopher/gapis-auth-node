const { google } = require("googleapis");
require("dotenv").config();

const requestAuthUrl = () => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );

  const scopes = ["https://www.googleapis.com/auth/calendar.readonly"];

  // request access from google for scoped access
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
  });

  return authorizationUrl;
};

exports.requestAuthUrl = requestAuthUrl;
