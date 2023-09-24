# Connex One Test

## Setup

To set up the app the first step is to install all the node modules for the server

```npm i```

Then to finish off the server requirements we need an authorization header

```
cd server
echo 'AUTHORISATION_HEADER=(insert token here)' > .env
```

Next let's do the same thing with the client

```
cd ../client
npm i
echo 'VITE_AUTHORISATION_HEADER=(insert token here)' > .env
```

Great now you're all set up

## Running the App

The easiest way to run the app to firstly make sure you're on the root directory of the porject.

Then you can run

```npm run start```

This will start both ther server and the client

The server runs on localhost:3000 and the client runs on localhost:5173

Go to http://localhost:5173/ to have a look

You can run the client and the server separately if you wish

```npm run start-server
npm run start-client```