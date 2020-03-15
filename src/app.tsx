import React from 'react';
import AppRouter from "./routing/app_router";
import {ThemeProvider} from "styled-components";
import {theme} from './styles/theme';
import FirebaseProvider from "./context/firebase.context";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <FirebaseProvider>
            <AppRouter/>
        </FirebaseProvider>
    </ThemeProvider>
  );
};

export default App;