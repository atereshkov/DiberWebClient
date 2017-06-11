# Diber Web Delivery Service

Diber Web Delivery Service with Angular 4 and Bootstrap 4 [hosted on Heroku](https://diber.herokuapp.com/).
Backend part of Diber Service is represented [here](https://github.com/handioq/Diber-backend).

## Navigation

* [Technologies](#what-is-used)
* [Building (dev server)](#building-with-dev-server)
* [Running tests](#running-tests)
* [Heroku](#heroku)

### What is used

* Angular 4
* Angular CLI
* Bootstrap 4 alpha

## Building with DEV Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Heroku

This project is ready for hosting on heroku. Just [create new app](https://dashboard.heroku.com/new-app?org=personal-apps) and commit repository to heroku. Package.json already contains start/build/postinstall scripts that needed for angular building on heroky.
