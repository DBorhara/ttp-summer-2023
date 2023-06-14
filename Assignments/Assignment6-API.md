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

## Project 2: City Locations

In this project we will allow the user to provide us a zip code and we will display all of the associated cities to the user. 

To get started run the following commands

- `create-react-app city-locations`
- `cd city-locations`
- `npm start`

At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (`city-locations`) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at `App.js` and you can also edit `public/index.html` (to add Bootstrap for example).

Using the same API as project 1, we will build a City search app, where given a city name, we will display all returned zip codes.

### Primary Tasks

Using the same zip-api we used in project 1:

- Implement a City Search field that takes city names
    + it should allow city names to be entered in upper, lower, or mixed case letters
- Display all zip codes received from the API

### Stretch Features (Optional, but highly recommended)

- Display all states within a given zip code radius
- Group received zip codes by state
- Display city details for each Zip code
- Create a separate search for calculating the distance between 2 zipcodes

> Note: these will require additional fetch call to the API. Feel free to use your own CSS styles and to add any additional features you want.