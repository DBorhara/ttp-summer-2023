# React Router

## Lesson Objectives:

- Describe the difference between server-side and client-side routing
- Add client-side routing to our React apps using React Router
- Set up React Router to enable common browser behavior
- Understand built in React Router components (Route, Router, Switch, Link, Redirect)

## Client-side Routing

Client-side `routing` is a bit of a misnomer.

On the server, `routing` generally refers to the way we
define the URLs and RESTful resources that make up our application. Whether
we are asking for data from the database or persisting data, our server
needs to know where the data lives. Server `routes` help us keep track of this information.

In the browser, things are a little different. When we build Single-Page Applications, we render
our data inside of the browser. The data lives on a server, so our data's "addresses" have
been defined elsewhere. We only need to know what these pre-defined addresses are to consume them.
We'll still have a lot of different `views` for our data, and we won't want to
show all of them on the page at once. Client-side `routing` is how we'll describe
which views we are showing on the page at any given time.

## Routing in React

React does not provide built-in functionality for client-side routing. However, we can use external libraries specifically designed for this purpose, such as React Router. React Router is a popular routing library that allows us to handle client-side routing seamlessly in our React applications.

In this lesson, we will focus on React Router v6, the latest version of the library. React Router v6 introduced significant changes and improvements over previous versions. It offers a simpler and more intuitive API, enhanced nested routing capabilities, and improved programmatic navigation.

To get started with React Router v6, let's set it up in a new React application:

- Create a new React application using `npx create-react-app`.
- Navigate to the project directory.
- Install React Router v6 using `npm install react-router-dom@next`

## Setting up React Router v6

Now that we have our React application and React Router v6 installed, let's configure it to enable routing within our app.

In your `App.js` file, update the imports to include the necessary components from React Router:

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userProfile">User Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile/*" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

In this code, we use the `BrowserRouter` component as the root router component. It provides the necessary context for handling routing within our app.

The `Routes` component allows us to define our routes and their corresponding components. Inside `Routes`, we specify each route using the `Route` component. In this example, we have two routes: the root path (`/`) that renders the Home component, and the `/userProfile` path that renders the `UserProfile` component.

To enable navigation between different routes, we use the `Link` component provided by React Router. It generates anchor tags (`<a>`) with the appropriate URLs based on the route paths we define. By clicking on these links, the router updates the URL and renders the corresponding component.

## Nested Routing

React Router v6 introduced improved support for nested routing, making it easier to handle complex navigation structures in our apps. Let's update the `UserProfile` component to include nested routes for the user's details and settings:

```jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function UserProfile() {
  return (
    <div>
      <h2>User Profile</h2>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile/details">Details</Link>
          </li>
          <li>
            <Link to="/userProfile/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default UserProfile;
```

In this updated `UserProfile` component, we define two nested routes: one for the `ProfileDetails` component and one for the `ProfileSettings` component. The `Link` components are updated to reflect the nested routes. By clicking on the "Details" or "Settings" links, the router will update the URL and render the corresponding component.

## Programamatic Navigation

React Router v6 introduced a new `Navigate` component for programmatic navigation. Let's update our `ProfileDetails` component to include a button that navigates to the settings page:

```jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileDetails() {
  const navigate = useNavigate();

  const navigateToSettings = () => {
    console.log("NAVIGATED");
    // Navigate to the settings page
    return navigate("/userProfile/settings");
  };

  return (
    <div>
      <h2>Profile Details</h2>

      <button onClick={navigateToSettings}>Go to Settings</button>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile">Back to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProfileDetails;
```

### LAB: Adding Debits and Credits

Let's add some more features to our banking app, using the following `User Stories`!

- The Debits index endpoint is located at `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
- The Credits index endpoint is located at `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`

#### Updating the Account Balance

```text
Making the Account Balance dynamic:

GIVEN I am on any page displaying the Account Balance
WHEN I view the Account Balance display area
THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits
```

#### Adding Debits

```text
Viewing the Debits page:

GIVEN I am on the Home Page
WHEN I click on 'Debits'
THEN I should be redirected to the Debits page
AND I should see a title of 'Debits' on the page
```

```text
Displaying debits:

GIVEN I am on the Debits page
WHEN I view the Debits display area
THEN I should see all of my debits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
```

```text
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

```text
Adding debits:

GIVEN I am on the Debits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Debits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
```

```text
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

#### Adding Credits

```text
Viewing the Credits page:

GIVEN I am on the Home Page
WHEN I click on 'Credits'
THEN I should be redirected to the Credits page
AND I should see a title of 'Credits' on the page
```

```text
Displaying debits:

GIVEN I am on the Credits page
WHEN I view the Credits display area
THEN I should see all of my Credits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
```

```text
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

```text
Adding Credits:

GIVEN I am on the Credits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Credits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
```

```text
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```
