# API I

- **Due** June 16th, 2023 by 10:00:00AM
- **Points** 10
- **Submitting** Fill out all of the appropriate information in the Bootcamp Tracker Google Sheet (available in the README)

## The Zip and City search API (ctp-zip-api)

https://zip-api.eu/en/

For this project we will be developing two simple applications, (1) the first app allows us to search for City names and details for a given zip code, and (2) the second app allows us to find the distance between 2 given zip codes.

Below is a description of the relevant API endpoints for the projects:

### `/radius/[country_code]-[postal_code]/[distance]/[unit]` - find Cities associated with a zipcode within a given distance

`https://zip-api.eu/api/v1/radius/US-11373/5/km`

You will receive a JSON response with an array containing an object for each city found.

### `/info/[country_code]-[postal_code]` - find city names associated with a zip code

`https://zip-api.eu/api/v1/info/US-11373`

## Project 1: Zip Code Search app

In this project you will build a simple Zip Code search app. We will need an input field where the user can enter a zip code, like in the following image:

We will use the user input to search zip-api.
If the zip code is valid the API will respond with an object. Use that response to display the relevant user information.

### Getting started

To get started run the following commands

- `create-react-app zip-search`
- `cd zip-search`
- `npm start`

At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (`zip-search`) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at `App.js` and you can also edit `public/index.html` (to add Bootstrap for example).

## Project 2: Distance between Zips

In this project we will allow the user to provide us two zip codes and we will display the distance between the 2 zip codes.

To get started run the following commands

- `create-react-app zip-distance`
- `cd zip-distance`
- `npm start`

At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (`zip-distance`) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at `App.js` and you can also edit `public/index.html` (to add Bootstrap for example).

Using the same API as project 1, we will build a zip-distance app, where given two zip codes, we will calculate the distance between the two zip codes.

### Primary Tasks

Using the same zip-api we used in project 1:

- Implement a distance calculator
  - it should allow US zip codes only
- Display distance in a given metric

### Stretch Features (Optional, but highly recommended)

- Keep a history of recent searches
- Let user choose between which measurement they want the output in(either miles or kilometers)

> Note: these will require additional fetch call to the API. Feel free to use your own CSS styles and to add any additional features you want.
