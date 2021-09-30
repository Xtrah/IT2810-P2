# Project 2

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using node v14.17.0 and npm 6.14.13.

## 👩‍💻 Setup and development

**NB! The environment variables need to be set before running the project for correct data fetching.**

### Setting environment variables

1. Make a file named `.env` in the projects root directory
2. Paste the following text into the `.env`-file:

   ```text
   REACT_APP_GITLAB_PROJECT_ACCESS_TOKEN=#AccessTokenFromGitlab
   REACT_APP_GITLAB_PROJECT_ID=#ProjectIdFromGitlab
   ```

3. **Get Gitlab access token:**

   - Go into your project in GitLab
   - Go to "Settings" --> "Access Tokens"
   - Choose a name, expiry-date and scopes
   - Click "Create project access token"
   - Substitute the received access token with `#AccessTokenFromGitlab` in the `.env`-file

4. **Get Gitlab project ID:**
   - Go to the "Project overview" page
   - The project ID can be copied from under the title of the project.
   - Substitute `#ProjectIdFromGitlab` with the retrieved project ID in the `.env`-file

### Running the project

After the variables are set, the relevant commands are:

- `npm install` to install dependencies
- `npm start` to run app in development mode
- `npm run lint` to run prettier and eslint checks
- `npm test` to run [test runner](https://facebook.github.io/create-react-app/docs/running-tests) interactively
- `npm build` to minify and build for production to the `build` folder

## 📋 Requirements

We divided each requirement for the project into issues, either as functional user stories or technical user stories.

### Content and feature requirements

#### Page elements and design

#### Responsive web design

#### HTML Web Storage

We used local storage to save the users theme-preference. This results in the theme persisting between each visit. Themeing is a personal preference which many users feel strongly about. Thus they can find it immensely annoying if such a setting does not persist. The implementation is in the form of a custom hook based on [this snippet](https://usehooks.com/useLocalStorage/). A custom hook provides for better readability and a greater level of reusability if we were to introduce more variables to save in local storage.

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

Jest is a testing framework which is used for unit tests. We made use of its built in functions to test whether a utility function `getUniqueCommitContributors` gave expected output. Jest can also be expanded upon with other libraries. We made use of `react-test-renderer`, which allowed us to make snapshot tests. This makes a json-version of a component, letting you check if earlier representation matches the new representation of the component. We added snapshot tests checking if `StatisticsSummary` rendered as expected with or without data.

An easy, useful test is checking whether the app crashes. To do this, we used the render function from `@testing-library/react` to test `App`. We also wanted to test user interaction, specifically if toggle of theme worked. Here we used `@testing-library/user-event` to check if button click changed theme as expected.

### Testing UI and responsiveness

Testing on 3 different units.

## ⚗️ Pipeline

To ensure good code quality we made use of prettier and eslint. These are enforced with husky, but also checked in the CI-pipeline before merge. We also run the test script to make sure functionality is as expected.
