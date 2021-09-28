# Project 2

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using node v14.17.0 and npm 6.14.13.

## 👩‍💻 Setup and development

The environment variables need to be set before running the project for correct data fetching. After the variables are set, the relevant commands are:

- `npm install` to install dependencies
- `npm start` to run app in development mode
- `npm run lint` to run prettier and eslint checks
- `npm test` to run [test runner](https://facebook.github.io/create-react-app/docs/running-tests) interactively
- `npm build` to minify and build for production to the `build` folder

### Setting environment variables

- make a `.env` file on root
- put the correct keys according to `.env.example` file
- **Getting Gitlab access token:** Go into your project in gitlab. Make a token on the page "Access tokens" under "Settings".
- **Getting Gitlab project ID:** On "Project overview" page, project ID can be copied from under the title of the project.

## 📋 Requirements

We divided each requirement for the project into issues, either as functional user stories or technical user stories.

### Content and feature requirements

#### Page elements and design

#### Responsive web design

#### HTML Web Storage

Use of local storage and session storage

#### Presenting GitLab data parameterized

### Technical requirements

#### React with TypeScript

React with TypeScript: class components and functional components. Appropriate component structure.

Using props and state mechanisms, and the Context API.

List used components from external libraries.

#### Fetching GitLab data

We chose to use the built in function `fetch` for data fetching. We considered the external library `axios`, which allows for automatic transforming of json-data. On the contrary, with `fetch`, we have to do a two-step-process to first make the request, then call the json-method. This can make the functions cumbersome, adding more boilerplate lessening the readability and developer speed. Since there wouldn't be many fetch-definitions in the project (we only defined one), we found `fetch` to be suitable for our needs. This avoided adding more dependencies to the project.

#### Responsive layout

- Viewport
- Media queries
- Scaling images
- Flexible layout

## 🧪 Testing

### Using Jest

For snapshot test react-test-renderer was used. This makes a json-version of a component, letting you check if earlier representation matches the new representation of the component. We added snapshot tests checking if `StatisticsSummary` rendered as expected with or without data.

For Jest tests we tested whether a utility function `getUniqueCommitContributors` gave expected output. We also made use of the pre-installed testing library from react to test whether `App` rendered without crashing.

### Testing UI and responsiveness

Testing on 3 different units.

## ⚗️ Pipeline

To ensure good code quality we made use of prettier and eslint. These are enforced with husky, but also checked in the CI-pipeline before merge. We also run the test script to make sure functionality is as expected.
