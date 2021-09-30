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

The application consists of several page elements:

- Title bar with theme button
- Summary of the statistics with a time scope menu
- Statistics

We used a simple material layout that retrieves data immediately on page load, where you can switch between light and dark mode.

#### Responsive web design

The site is responsive and compatible with most devices, using different techniques described in the [responsive layout](#Responsive_layout) section below.

#### HTML Web Storage

We used local storage to save the users theme-preference. This results in the theme persisting between each visit. Themeing is a personal preference which many users feel strongly about. Thus they can find it immensely annoying if such a setting does not persist. The implementation is in the form of a custom hook based on [this snippet](https://usehooks.com/useLocalStorage/). A custom hook provides for better readability and a greater level of reusability if we were to introduce more variables to save in local storage.

Basing session storage on the same local storage hook, we store the user selected time scope for the GitLab statistics. This setting makes sure that the selected time scope in the dropdown menu stays selected when the user refreshes the page for the duration of the session. This is convinient when the user refreshes the page and expects to retrieve updated statistics for the selected time frame. Without session storage the time scope would reset to the default "all time" every time the page loads.

#### Presenting GitLab data parameterized

The page presents GitLab issue and commit statistics rendered using [Highcharts](https://www.npmjs.com/package/highcharts), an external SVG-based charting library.

The user is given the option to change the time scope of the GitLab data. This change is handled in the browser itself, giving the user instant feedback. This setting is saved in user session storage such that it saves even if the user were to refresh the page.

### Technical requirements

#### React with TypeScript

The project uses the latest versions of [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) at the time of development.

How we use class components and functional components, structured appropriately.

How we use props, state mechanisms, Context API.

External libraries/components used are:

- [Highcharts](https://www.npmjs.com/package/highcharts) to render statistics in charts
- [styled-components](https://styled-components.com/) for easier customization of React components
- [Dotenv](https://github.com/motdotla/dotenv) for environment variables/project secrets
- [Husky](https://typicode.github.io/husky/) for Git hooks
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for formatting checks and code linting

#### Fetching GitLab data

We chose to use the built in function `fetch` for data fetching. We considered the external library `axios`, which allows for automatic transforming of json-data. On the contrary, with `fetch`, we have to do a two-step-process to first make the request, then call the json-method. This can make the functions cumbersome, adding more boilerplate lessening the readability and developer speed. Since there wouldn't be many fetch-definitions in the project (we only defined one), we found `fetch` to be suitable for our needs. This avoided adding more dependencies to the project.

#### Responsive layout

How we used:

- Viewport
- Media queries
- Scaling images
- Flexible layout

## 🧪 Testing

### Using Jest

Jest is a testing framework which is used for unit tests. We made use of its built in functions to test whether a utility function `getUniqueCommitContributors` gave expected output. Jest can also be expanded upon with other libraries. We made use of `react-test-renderer`, which allowed us to make snapshot tests. This makes a json-version of a component, letting you check if earlier representation matches the new representation of the component. We added snapshot tests checking if `StatisticsSummary` rendered as expected with or without data.

An easy, useful test is checking whether the app crashes. To do this, we used the render function from `@testing-library/react` to test `App`. We also wanted to test user interaction, specifically if toggle of theme worked. Here we used `@testing-library/user-event` to check if button click changed theme as expected.

### Testing UI and responsiveness

Testing on 3 different devices.

## ⚗️ Pipeline

To ensure good code quality we made use of prettier and eslint. These are enforced with husky, but also checked in the CI-pipeline before merge. We also run the test script to make sure functionality is as expected.
