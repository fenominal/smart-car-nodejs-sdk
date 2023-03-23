# smart-car-nodejs-sdk

Make sure you have cloned this repo -
```bash
$ git clone https://github.com/fenominal/smart-car-nodejs-sdk.git
$ cd getting-started-express/app
```
To install the required dependencies and run this Express app -
```bash
$ npm install
$ npm start
```

Make Folder "config" in that make 2 files .env and env.js

write this code.
.env
```bash
###### Enviroment Variable File ######

#MongoDB Atlas Connection String...
MONGOATLAS= # mongo db atlas connection string

PORT= #applicatio running Prot

JWT_SECRET = # jwt screat key for web token
```
env.js
```bash
export const clientId = "";// client id from smart car account.
export const clientSecret = "";// client secreat key from smar car account.
export const redirectUri = "";// callback url from smart car account.
export const mode = "test"; // help to lunch application as in test mode
