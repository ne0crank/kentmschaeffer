# Budget Manager App

Framework ideas and code snippets were *stolen* from these sources:
- [MEVN Stack](https://github.com/aturingmachine/mevn-stack)
- [Focus Budget Manager](https://github.com/gdomaradzki/focus-budget-manager)

This will hopefully be built into a template for building a fullstack Budget Manager App using:
- [Node](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [VueJS](https://vuejs.org/)
  - [Vuetify](https://vuetifyjs.com/) as a Vue Component Framework

The application consists of an Express REST API that is consumed by a VueJS Single Page Application.

## Installation


```sh
# clone this repository
# git clone git@github.com:ne0crank/[repository-name].git [directory-name]

# or click "use this template" and clone your new repo
# git clone <your-repo>

# run the setup
# run setup

# if the setup script fails:
# install dependencies in both sub-projects
npm ci --prefix app/
npm ci --prefix web/

# copy env file
cp .env.example .env
```

### Other Dependencies

You will also need:
  - A MongoDB instance to connect to
  - The [Vue CLI](https://cli.vuejs.org/) installed

## Development

This repo comes with a helper script to run both the Vue development server and Express application in the same terminal:

```sh
npm run dev
```

Either application can also be run individually:

```sh
# Start the Express application with reloading via nodemon
npm run dev:server

# Start the Vue application with HMR and Reloading
npm run dev:client
```

## Task List

These are the things I need to do to get the app running and converted to a template
[ ] build out nodejs app on the backend
[ ] design mongodb schema
[ ] build out mongodb database and ensure connections work
[ ] build out expressjs API
[ ] build out vuejs app on the frontend
[ ] build out vuetifyjs framework works and displays properly
[ ] build out build and setup scripts
[ ] debug, debug, debug ... squish de bugs
