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

```
npm run start-server
npm run start-client
```

## Testing the App

To run a test first we can test the server with API tests in the root folder

```npm run test```

Then to test the client we can go to the client and run the same command

```
cd client
npm run test
```

## Future Work

With more time on this project here are things to consider:

- Adding a 403 error message in the UI if the header is wrong
- Allowing to user select a time for the epoch timer to change rather than it's default 30 seconds
- Showing a history of all previous Epoch times
