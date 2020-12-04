## Create-lit-app

[![Built with create-lit-app](https://img.shields.io/badge/built%20with-create--lit--app-blue.svg)](https://github.com/thepassle/create-lit-app) 

## Quickstart

```sh
npm install --global create-lit-app
create-lit-app my-app

cd my-app
npm start
```

### npm start

Start `webpack-dev-server` on localhost `http://127.0.0.1:3000`:

```sh
npm run start
```

### npm test

Run tests:

```sh
npm run test
```

### npm build

Run the production build:

```sh
npm run build
node server.js
```

As easy as that! Your app is ready to be deployed.

## Folder Structure

After creation, your project should look like this:

```
create-lit-app/
  README.md
  dist/
  node_modules/
  src/
    assets/
      favicon.ico
      github.svg
      logo.svg
    hello-world.js
    AppStyles.js
    index.html
    lit-app.js
    store.js
  test/
    hello-world.html
    index.html
  .babelrc
  .eslintignore
  package-lock.json
  package.json
  polymer.json
  README.md
  server.js
  webpack.config.js
```