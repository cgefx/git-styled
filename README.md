# gitStyled

A React app that styles up your Github profile a bit.

Try it live  [here](https://git-styled.netlify.app/).

## Functionality

- Entering a valid Github username will redirect the user to a new "page" displaying profile info as well as up to 8 repositories for the entered username. Implemented with React Router's history hook.
  
- Form button is disabled until, text is entered.
  
- Error handling for invalid usernames, rate limiting the API, and server errors

- The app displays the current rate limit for working with Github's free API.

- Repo grid is sortable and animated with React Flip Tookit.
  
- Responsive layout
  
- Custom hook for data fetching

## Tools / Libraries Used

- [React / Create-react-app](https://github.com/facebook/create-react-app)
- [React Router](https://github.com/ReactTraining/react-router)
- [Styled Components](https://github.com/styled-components)
- [Primer / Octicons](https://primer.style/octicons/)
- [React Flip Toolkit](https://github.com/aholachek/react-flip-toolkit)
- [Github REST API](https://developer.github.com/v3/)
- Deployed on [Netlify](https://www.netlify.com/) using the [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation)

## Running the app locally

- Clone the repo and install dependencies with `npm install`

- Run the app in development mode with `npm start`

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.
  