# DOM Challenges I

- **Due** January 8th, 2021 by 10:00:00AM
- **Points** 12
- **Submitting** Fill out all of the appropriate information in the Bootcamp Tracker Google Sheet (see pinned items in the Cohort Slack Channel)

## Goal

Demonstrate understanding of DOM traversal and DOM manipulation. Build familiarity with JS syntax. Look into: getElementById, querySelector, getElementsByClassName, querySelectorAll, the innerText property, classList.add, className, classList.remove, createElement, appendChild. Section off the code with comments based on the particular part of the prompt you are addressing.
Hint:
In a separate `script.js` file within the same repository (this repository holds `index.html` and `script.js`), include your answers like in the example below. Push this solo assignment in your bootcamp directory/repository on your GitHub.

```
// 1 - Select the section with an id of container without using querySelector.
document.getElementById("container");
```

## Direction

This is an exercise that will help get you acclimated to the DOM API. For each individual prompt, write out the code necessary to achieve the particular task at hand. Test it out, and then move forward. If you encounter a situation where you can use a previous prompt’s solution for the one you are currently working on, feel free to keep it DRY (Do-Not-Repeat-Yourself) and leverage that reusable code. By the same token, if you encounter a situation where a previous prompt’s solution is a blocker (gets in the way of what you are trying to achieve at the moment), then prioritize the current prompt. You can comment out the code that’s blocking, test out the current code that you are working on, and after verifying that it works you can comment back in the previous code. In this way, you’ll be treating each prompt as an individual, distinct task. The primary point is to become more familiar with the DOM methods that allow you to interact and manipulate the Document Object Model.

## Assignment

Complete and submit the following based on this [link ](https://gist.github.com/ajLapid718/3f1caaf7365a9d9049c1b5e8b9c45d97):

Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of "second".
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the section with an id of container the text "Hello!".
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text "four".
10. Append the li to the ul element.
11. Loop over all of the lis inside the ol tag and give them a background color of "green".
12. Remove the div with a class of footer.

## Grading Criteria

- Code has a comment that notes which problem the code snippet is attempting to solve.
- All solutions should explicitly fulfill the requirements noted in each problem.
- **Complete**: Meets all grading criteria above.
  **Incomplete**: Does not meet all grading criteria above. Needs improvement or missing submission.
