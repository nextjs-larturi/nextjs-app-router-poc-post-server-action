# Simple PoC Next 14 App Router Server Actions

## Technologies

- Next 14 (App Router)
- Node 20

## Start in Dev Mode

1. Clone the repository
2. Set Node v20: ```nvm use 20```
3. Install the dependencies: ```npm install```
4. Start the server: ```npm run dev```


## Application flow

- The index page (server-side) calls a client-side form component

- The client-side form at the time of submit invokes a server action

- The server action makes the fetch to the public pokemons api

- As can be seen in the network part of the browser's development tools, at the time of fetch, the pokeApi url is protected, with the user not knowing how the information is obtained
