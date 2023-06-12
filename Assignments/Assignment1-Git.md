# Collaboration Workshop

- **Due** June 13, 2023 by 10:00:00 AM
- **Points:** 10
- **Submitting** Append your team members’ names and GitHub Link (the deployed link) to the repository everyone collaborated on in the appropriate tab on the Cohort’s Excel Spreadsheet

## Goal

To work as a group to create a website utilizing git and GitHub. Demonstrate understanding of git commands and GitHub workflow.

## Assignment

Choose a cause that your group really cares about and put together a small informational website using HTML/CSS trying to convince people to donate to or help out this cause. This site should be 2-3 pages and look as professional as possible using modern design trends. Research similar websites to get inspiration.
Once you have decided on a cause, begin by selecting one teammate to create a Git repo with an index.html file, push it to GitHub, then add the other teammates as collaborators on the repo. Throughout this workshop each teammate should be communicating often and using GitHub effectively. Remember no one should be working off Master so create branches, resolve merge conflicts, and create and close issues.

## Grading Criteria

- [ ] HTML is formatted properly

  - **Good :**

  ```<!DOCTYPE html>
   <html>
     <head>
       <title>My Website</title>
     </head>
     <body>
       <h1>Welcome to my website!</h1>
       <p>This is my website. I hope you enjoy it. Some of my interests are:</p>
       <ul>
         <li>Reading</li>
         <li>Cooking</li>
       </ul>
     </body>
   </html>
  ```

  - **Bad:**

  ```
  <html><head><title>My Website<title><head><body><h1>Welcome to my website!</h1><p>This is my website. I hope you enjoy it. Some of my interests are:<ul><li>Reading</li><li>Cooking<li><ul></p></body></html>
  ```

- [ ] CSS is formatted properly

  - **Good:**

  ```
   body {
     background-color: #FFFFFF;
     color: #000000;
   }

   h1 {
     font-size: 24px;
     color: #FF0000;
   }

   p {
     font-size: 14px;
   }

   #header {
     background-image: url(header.jpg);
   }
  ```

  - **Bad:**

  ```
    body{background-color: #FFF;color:#000;}h1{font-size:24px;color:#F00;}p{font-size:14px;}#header{background-image:url(header.jpg);}
  ```

- [ ] At least 2-3 pages
- [ ] Users can clearly navigate throughout the website.
- [ ] Thoughtful styling has been applied.
- [ ] Create issues for each of the different pages and aspects of the site and assign each to a teammate. You'll be expected to create at least 3 issues
- [ ] Make sure that the commit messages for commits involving each issue reference the issue. For instance, git commit -m "Menu completed, closes #14'

**Complete:** Meets ALL grading criteria points above.
**Incomplete:** Does not meet all grading criteria points above. Needs improvement or missing submission.
