## The Zip and City search API (ctp-zip-api)

http://ctp-zip-api.herokuapp.com/
// Make another one before lesson

For this project we will be developing two simple applications, (1) the first app allows us to search for City names and details for a given zip code, and (2) the second app allows us to find all of Zip codes associated with a given City name.

Below is a description of the relevant API endpoints for the projects:

### `/zip/:zipcode` - find Cities associated with a zipcode

`http://ctp-zip-api.herokuapp.com/zip/:zipcode`

provide the zipcode in the url and you will receive a JSON response with an array containing an object for each city found. 


http://ctp-zip-api.herokuapp.com/zip/10016

### `/city/:cityname` - find Zip Codes associated with a city name

`http://ctp-zip-api.herokuapp.com/city/:cityname`

`:cityname` must be in all caps

provide the city name in the url and you will receive a JSON response with an array containing a list of all zip codes for that city:

http://ctp-zip-api.herokuapp.com/city/SPRINGFIELD


## Project 1: Zip Code Search app

In this project you will build a simple Zip Code search app. We will need an input field where the user can enter a zip code, like in the following image:

#### [Before Search](https://github.com/CUNYTechPrep/week-03-projects/blob/master/zip-search-1.png)

We will use the user input to search the ctp-zip-api. If the zip code is valid the API will respond with an object for each city. Use that response to display each city in a separate div like in the following image: 

#### [After Search](https://github.com/CUNYTechPrep/week-03-projects/blob/master/zip-search-2.png)

### Getting started

To get started run the following commands

- `create-react-app zip-search`
- `cd city-search`
- `npm start`

At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (`zip-search`) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at `App.js` and you can also edit `public/index.html` (to add Bootstrap for example).

## Project 2: City Search app

In this project we will allow the user to provide us a City name and we will display all of the associated zip codes to the user. 

To get started run the following commands

- `create-react-app city-search`
- `cd city-search`
- `npm start`

At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (`city-search`) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at `App.js` and you can also edit `public/index.html` (to add Bootstrap for example).

Using the same API as project 1, we will build a City search app, where given a city name, we will display all returned zip codes.

### Primary Tasks

Using the same ctp-zip-api we used in project 1:

- Implement a City Search field that takes city names
    + it should allow city names to be entered in upper, lower, or mixed case letters
- Display all zip codes received from the API

### Stretch Features (Optional, but highly recommended)

- Display all states where the city was found in the API
- Group received zip codes by state
- Display city details for each Zip code

> Note: these will require additional fetch call to the API. Feel free to use your own CSS styles and to add any additional features you want.