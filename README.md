# Reactship Battle

It is the good and old Battleship game that you probably know, but implemented for the browser
so you can play anytime you want against our well polished AI who will be delighted to play
against you. Be warned though: it will not give you any mercy.

## Getting started

Clone this project and move into it. Then execute the following commands:

```
npm install
npm start
npm test # OPTIONAL
```

### About

This project was created with [create-react-app](https://github.com/facebook/create-react-app) and it was developed using the following libraries:

- enzyme
- redux
- reselect
- sweetalert2
- react-jss

### AI Logic

The AI Logic it's pretty simple (though I don't discard any further improvements in this feature): it'll hit randomly until it hits any of your ships. Once it hits a ship, it'll start shooting the places next to the hit spots, and will keep this process until it sinks all your ships, or you do it first with its ships. Good luck with that! 