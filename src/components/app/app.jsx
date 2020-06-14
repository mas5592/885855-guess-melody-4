import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const welcomeButtonClickHandler = () => {};
const ERRORS_COUNT = 3;

const App = () => {
  return <>
    <WelcomeScreen
      onWelcomeButtonClick = {welcomeButtonClickHandler}
      errorsCount = {ERRORS_COUNT}
    />
  </>;
};
export default App;
