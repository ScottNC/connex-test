# Connex One Test

## Setup

To set up the app the first step is to install all the node modules for the server

```npm i```

Then to finish off the server requirements we need an authorization header

```cd server```
```echo 'AUTHORISATION_HEADER=(insert token here)' > .env```

Next let's do the same thing with the client

```cd ../client```
```npm i```
```echo 'VITE_AUTHORISATION_HEADER=(insert token here)' > .env```

Great now you're all set up