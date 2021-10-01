# Project 2

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

### Content and feature requirements

#### HTML Web Storage

We found it suitable using local storage for user's theme preference, as this is something a user may want to persist after re-entering the application after closing the browser. The implementation was in the form of a custom hook based on [this snippet](https://usehooks.com/useLocalStorage/). A custom hook provides readability, and can also be reused if we were to introduce more variables to save in local storage.

We used session storage for storing the user's selected time scope of GitLab statistics. The code and functionality was very similar to the aforementioned hook, so much of the code could be reused. Storing the setting in session storage made sure that the selected time scope in the dropdown menu stays selected when the user refreshes the page for the duration of the session.

#### Presenting GitLab data parameterized

The page presents GitLab issue and commit statistics rendered using [Highcharts](https://www.npmjs.com/package/highcharts), an external SVG-based charting library. We chose this as someone in the team had experience with it, it is popular and has good documentation.

For user parameterizing we chose to display data based on a chosen time frame. One solution would be to fetch specific data on request. We chose not to do this, as it would lead to multiple fetches when changing time scopes and GitLab has a limit on API-calls.

Instead, we do all the data fetching when the app mounts. Then we filter the data on the client side according to what time scope is chosen by the user. As it's not expected that the data will change often, we found this a suitable solution.

### Technical requirements

#### React with TypeScript

Typescript may be challenging to use, but has multiple [benefits](https://blog.bitsrc.io/5-strong-reasons-to-use-typescript-with-react-bc987da5d907), such has predictability of values. In many cases types and interfaces are [similar](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces). For our use interfaces satisfied our needs, so we consistently made use of them. We made a folder `types` to group interfaces and enums we reused.

[Traditionally](https://www.twilio.com/blog/react-choose-functional-components) class components were used to handle state with option to define lifecycle methods, while functional components (FC) were used for presentation. This distinction does not stand with the arrival of hooks for state management and life cycle methods. In large we used FC, as it includes less boilerplate code, it avoids the confusing this-term and in sum can be more readable.

We used a class component in `App`. It acts as a parent component, fetching data in the lifecycle method `componentDidMount`. In a FC `useEffect` can be used to control the traditional life cycle methods. For example in `Statistics` we used `useEffect` to listen for changes in the data sent from `App`, which corresponds with CC's `componentDidUpdate`.

Since this was not a large app, we didn't feel the need to create a global store for the data fetching. Instead we drilled down the data from `App` and down the components using props. On the other hand, it was useful to utilize the context API for the theme toogling, as this affected all the styles.

#### Fetching GitLab data

We chose to use the built in function `fetch` for [data fetching](https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/). We considered the external library `axios`, which allows for automatic transforming of json-data. On the contrary, with `fetch`, we have to do a two-step-process to first make the request, then call the json-method. This can make the functions cumbersome, adding more boilerplate lessening the readability and developer speed. Since there wouldn't be many fetch-definitions in the project (we only defined one), we found `fetch` to be suitable for our needs. This avoided adding more dependencies to the project.

#### Design and responsive layout

We chose to style using [styled-components](https://blog.logrocket.com/benefits-using-styled-components-react/). This allows for keeping style close to where it's used, but still allows a clear view of the logical components. This allows for easy adjustments of style and reusability.

To make the layout of our web application responsive, we included a number of features to ensure flexibility in terms of scaling. Media queries were used to create breakpoints for different screen sizes and we used percentages to make the width of content wrappers dynamic. We chose to use only a single breakpoint at `960px`, because we felt that this was a fitting pixel width for wrapping the layout. Additional breakpoints were considered, but we found it to be uneccessary and would make later adjustments cumbersome. Additionally we used flexbox to implement dynamic layouts using automatic wrapping and alignment. For the statistics, Highcharts already included dynamic scaling.

Furthermore, we did not use the viewport when creating and styling the layout of our web application. The viewport can be used to ensure that the size of layout elements look good on all screen sizes. Since smaller phones have a high pixel density, `px` is not neccesserally a good unit to use considering scalability. Using the viewport meta tag, one can set different scales to compensate for this. However, we have used percentage units, which bases itself upon the size of parent containers. We could also have used `vw` and `vh` since these are based off of the viewport, but chose percentages as we were familiar with that. Even without implementing viewports, our tests show the solution is solid in terms of responsiveness and scalability, see testing UI section below.

## 🧪 Testing

### Using Jest

Jest is a testing framework which is used for unit tests. We made use of its built in functions to test whether a utility function `getUniqueCommitContributors` gave expected output. Jest can also be expanded upon with other libraries. We made use of `react-test-renderer`, which allowed us to make snapshot tests. This makes a json-version of a component, letting you check if earlier representation matches the new representation of the component. We added snapshot tests checking if `StatisticsSummary` rendered as expected with or without data.

An easy, useful test is checking whether the app crashes. To do this, we used the render function from `@testing-library/react` to test `App`. We also wanted to test user interaction, specifically if toggle of theme worked. Here we used `@testing-library/user-event` to check if button click changed theme as expected.

### Testing UI and responsiveness

We wanted the phones and tablets with the most common screen aspect ratios to be supported. To achieve this we had to test the responsivenss of the UI thoroughly. The testing was performed using Google chrome and safari, as these are popular and may show differences. Using the browser inspection tool, we tested mobile and tablet screen aspect ratios. We tested a PC screen, iPad and a phone in both horizontal and vertical orientation. We also tested the application on an iPhone 12.

For each device that we tested, we ran the web application and ensured that it behaved as intended. If it did not, we rewrote code and checked if it still worked for the previously tested aspect ratios. For example we adjusted a media query. We also ensured that the website behaved well when dynamically changing the window size.

## ⚗️ Code quality and use of Git

We made use of the formatting tools [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to ensure a common coding style and good code quality. These were enforced with a [pre-commit hook](https://typicode.github.io/husky/) and a CI-pipeline on pull request and after merge. We also ran the test script in the pipeline to make sure functionality was as expected. We strived to extract logical groupings into their own components, and adding the components in their own folder `src/components`. Some functions were extracted into a `src/util` folder for reuse or to avoid cumbersome files. We strived to make variable- and function names descriptive, and also added comments for clarity.

We had a early meeting planning each project requirement decomposed them into functional user stories or technical user stories. In development we strived following [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), describing commit messages in a common way and linking them to issues.
