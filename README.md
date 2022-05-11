# CRUD APP

I started this project to learn more about the MERN Stack.

The front end is developed with `React`and `styled-components`.

The backend has custom API endpoints written in `Node.js`.
These API endpoints are for `CRUD` operation (Create, Read, Update, Delete)

For the middleware, we use `express`.
and for the database we `mongoDB`'s atlas.
Our database has 1 collection `users` which holds a custom written schema
that defines the user data which looks like :
`Name(STRING), Age(NUMBER, and Username(STRING)`

Back end will be hosted on `heroku` to maintain api functionality.
Front end will be hosted on `gh-pages`.

## Technical Challenge

Every user that was created on the frontend would render with edit and delete buttons.

`Expected outcome:` Clicking the edit button would render an edit component to allow the user to change
the information of the selected user.

`The Issue:` The edit button would conditionally render an edit component based on whether the edit button was clicked or not. `useState to toggle the condition`
However, if any one of these user cards had their edit button clicked `ALL` user cards would
render the edit component.

`Fix:` We resolved this issue by instead moving the code for our UserCard's into their own component,
so that they would each indivdually manage their own state for toggling the edit component.
The problem existed because they originally shared state across all the UserCards.
