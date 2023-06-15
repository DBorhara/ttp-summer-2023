# API II

- **Due** June 16th, 2023 by 10:00:00AM
- **Points** 10
- **Submitting** Fill out all of the appropriate information in the Bootcamp Tracker Google Sheet (available in the README)

For this group assignment, you will create a simple web application that does the following:

- [ ] Allow the user to enter any search term
- [ ] Fetch a list of results from the [GIPHY API](https://developers.giphy.com/docs/#technical-documentation)
- [ ] Allow the user to sort and filter based on as many parameters you'd like

## Requirements

- When App mounts, load trending gifs

- DO NOT WRITE ALL COMPONENTS IN ONE FILE. Break out components into separate files, and make sure that they are imported/exported properly

- Consider using three components:

  - **App Component:** has state with GIFS

  - **SearchField Component:** has state with search field input

  - **GifCard Component:** presentational component receiving GIF info as props

In order to interact with the API, you will need to create a free developer account and create a new project to have an API key generated for you.

To hit various GIPHY API Endpoints, you can use the following paths:

- Regular Search: http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY

  - returns an array of gif objects

- Trending Search: http://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY

  - returns an array of gif objects

- Random Search: http://api.giphy.com/v1/gifs/random?api_key=YOUR_API_KEY

  - returns a singular gif object
