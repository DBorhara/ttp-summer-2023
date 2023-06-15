# DOM Challenges III with ReactJS

- Due June 20th, 2023 by 10:00:00 AM
- Points 20
- Submitting The established protocol for submitting group work (locating the Pinned Google Sheet on the Cohort Slack General Channel, navigating to the appropriate tab, putting down your Group Members’ names, and linking the repository on GitHub that you all collaborated on)

## Goal

This is another exercise to further demonstrate an understanding of HTML, CSS, JS, DOM manipulation, and handling user events with ReactJS. This is also an opportunity to for improving organization in a React application.

## Direction

You'll be re-doing part of the functionality of the DOM Challenges III (grid/row/column/color) assignment, but with Create-React-App this time around. Instead of directly using the DOM API, you'll be managing state (hint: the currently selected color and the grid), writing methods within the class instead of standalone functions, and passing down bounded-event handlers to be fired off in the children components that have event listeners on them (note: since `this` will be bound in a parent, then any child component that receives the bound function as a passed down prop will be able to impact [perform calculations/operations relevant to the parent] the parent component). The MVP (minimum viable product) features can be achieved with four components: App.jsx, Table.jsx, TableCell.jsx, TableRow.jsx, where App.jsx is a stateful, class component and the other three components are purely presentational components. The MVP features are: a user can add a row, a user can add a column, and a user can select a color to change a single cell via click. As a user, I can add a row, add a column, select a color from a dropdown menu of colors, and click on individual cells to color in the cell. Stretch and optional features will be recreating the entirety (clear the grid, fill the grid, fill uncolored cells, etc) of DOM Challenges III, but in ReactJS. There should be a dedicated and individual feature branch for each function you plan on writing as well as a dedicated and individual feature branch for each component you write out.

**Use this time to also do two things:**

1. Navigate to this extension for Google Chrome and install it: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en. This shows you the root React components that were rendered on the page, as well as the subcomponents that they ended up rendering. By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right. In the breadcrumbs you can inspect the selected component, the component that created it, the component that created that one, and so on. If you inspect a React element on the page using the regular Elements tab, then switch over to the React tab, that element will be automatically selected in the React tree.
2. Deploy this to GitHub Pages. Please refer to this link for guidance on this: https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d
   (debug as necessary)

## More Direction/Suggestions

- Put all of your components in a directory titled `components`
- Create an `index.js` file for that `components` directory so that you can have a central location of exporting (it will look something like this, not identically of course) (this is known as a barrel file)
- The above will allow you to import multiple components from this one file in your App.jsx (or any file that needs a component) in a convenient, semantic way that appears like so (disregard the names of the files and substitute the names of your particular components):

  ```
   import { HeaderView, MainView, FooterView, RoutesView } from "./components"; (index.js is automatically implied and interpreted)
  ```

- App.jsx could maintain the state of the grid as well as the state of the selected color (stateful, class component)
- App.jsx could have methods (bound event handler functions) on the class which will be passed down to children components via props (the children components, presentational components, will have event listeners that will fire off the bound event handler functions
- App.jsx could render the dropdown menu as well as the Table Component (presentational component)
- Table.jsx could be the parent of TableRow.jsx (presentational component)
- TableRow.jsx could be the parent of TableCell.jsx (presentational component)

**The above are merely suggestions and by no means is a mandatory approach**

## Assignment

Complete the following user stories (bold denotes an MVP/mandatory feature, whereas italics denotes a stretch/optional feature):
As a user, I can:

- [ ] **add rows to the grid**
- [ ] **add columns to the grid**
- [ ] remove rows from the grid
- [ ] remove columns from the grid
- [ ] **select a color from a dropdown menu of colors**
- [ ] **click on a single cell, changing its color to the currently selected color**
- [ ] fill all uncolored cells with the currently selected color
- [ ] fill all cells with the currently selected color
- [ ] clear all cells/restore all cells to their original/initial color
- [ ] click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color

## Grading Criteria

- Code has a comment that notes/documentation on which problem/feature the particular function is attempting to solve
- All solutions should explicitly fulfill the requirements noted in each problem.
- **Complete:** Meets all grading criteria above.
- **Incomplete:** Does not meet all grading criteria above. Needs improvement or missing submission.
