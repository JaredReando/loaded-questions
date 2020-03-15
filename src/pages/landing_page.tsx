import React from 'react';
import useFirebase from "../hooks/firebase/use_firebase";
import {ThemeHeader, AppText } from './landing_page.styles';

const LandingPage = () => {
    const firebase = useFirebase();
    console.log(firebase.auth);
    return (
        <>
            <ThemeHeader>Welcome to Loaded Questions</ThemeHeader>
            <AppText color="success" ml={7}> With style props</AppText>
        </>
        )
};

export default LandingPage;