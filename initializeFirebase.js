var admin = require("firebase-admin");
const dotenv = require('dotenv')
dotenv.config();

// var serviceAccount = require("./learning-game-69ed5-firebase-adminsdk-og439-4688fc5c53.json");
// console.log(process.env.TYPE);

var serviceAccount = {
  type:"service_account", 
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key:process.env.PRIVATE_KEY,
  client_email:process.env.CLIENT_EMAIL,
  client_id:process.env.CLIENT_ID,
  auth_uri:process.env.AUTH_URL,
  token_uri:process.env.TOKEN_URI ,
  auth_provider_x509_cert_url:process.env.AUTH_PROVIDER, 
  client_x509_cert_url:process.env.CLIENT_CERT,
  universe_domain:"googleapis.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); 