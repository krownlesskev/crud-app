# CRUD APP

`Live Demo:`
https://krownlesskev.github.io/crud-app/

I started this project to learn more about the `MERN` Stack.

The Front end is developed with `React`and `styled-components`.

The backend has custom API endpoints written in `Node.js`.
These API endpoints are for `CRUD` operation (Create, Read, Update, Delete)

For the middleware, we use `express`.
and for the database we `mongoDB`'s atlas.
Our database has 1 collection `users` which holds a custom written schema
that defines the user data which looks like :
`Name(STRING), Age(NUMBER, and Username(STRING)`

Back end will be hosted on `heroku` to maintain api functionality.
The Front end will be hosted on `gh-pages`.

## Technical Challenges

### Front End:

Every user that was created on the frontend would render with edit and delete buttons.

`Expected outcome:` Clicking the edit button would render an edit component to allow the user to change
the information of the selected user.

`The Issue:` The edit button would conditionally render an edit component based on whether the edit button was clicked or not. `useState to toggle the condition`
However, if any one of these user cards had their edit button clicked `ALL` user cards would
render the edit component.

`Fix:` We resolved this issue by instead moving the code for our UserCard's into their own component,
so that they would each indivdually manage their own state for toggling the edit component.
The problem existed because they originally shared state across all the UserCards.

### Back End:

Server was being deployed to heroku.

`Expected outcome:` After deploying to heroku, out front end would be able to make api calls to the server.

`Issue:` Heroku app was crashing immediately.

`Fix:` I had only set enviromental variables during development (locally) to protect my mongoDB URI. I had to manually set new enviroment variables on heroku's CLI and use those instead.

`Sub-issue to this fix:` While setting the URI in the .env on heroku, I had initially set it with `" "`, this
caused a parsing error during deployment.

`Fix:` I simply had to remove the `" "` in my enviromental variable on heroku to get the URI to work.