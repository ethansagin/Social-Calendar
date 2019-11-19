Welcome to the React Social Calendar, your one-stop-shop for all of your social scheduling needs! This is Ethan Sagin's final project for the Flatiron Bootcamp, it was built witha React/Redux front-end and a Ruby-on-Rails API back-end.

The app serves as a social calendar through which you can track your past meetups and schedule future ones with your friends. You can set a monthly interval of how often you would like to see friend, and the app will alert you if you are overdue to schedule a meetup within that interval. Additionally, the Upcoming page will list friends' meetups and birthdays that are scheduled for the immediate future, as well as list any friends with whom you have yet to schedule your next meetup.

Check out a deployed version of this app at: https://social-calendar-client.herokuapp.com/

INSTALLATION

***Note: this application requires front- and back-end elements to run simultaneously on two separate terminals, the app designates the ports as localhost:3000 for client-side functions and localhost:3001 for the api***

CLIENT-SIDE
1) Clone the Github repository for the client-side by entering the following command in your terminal: "git clone git@github.com:ethansagin/Social-Calendar.git"

2) Change directories to the cloned directory: "cd social-calendar-client"

3) Install the required node packages: "npm install"

4) Spool up the server in your web browser: "npm start"

5) Web page should automatically open in browser on localhost:3000

API
6) Open a separate terminal and clone the Github repository for the api: "git@github.com:ethansagin/Social-Calendar-API.git"

7) Change directories to the cloned directory: "cd social-calendar-api"

8) Install the required gems: "bundle install"

9) Spool up the server in your browser: "rails s"

10) Return to localhost:3000 page to begin using the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
