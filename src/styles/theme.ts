import { Theme } from "../types/theme.type";

export const theme = {
    colors: {
        primary: 'black',
        secondary: 'white',
        error: 'tomato',
        success: 'lightgreen',
    },
    text: {
        fontFamily: "'Source Sans Pro', 'sans-serif'",
        size: {
            small: '.75em',
            medium: '1.0em',
            large: '1.5em',
            xLarge: '2.0em',
        }
    },
    space: [0, 2, 4, 8, 12, 24, 32, 64],
    radii: [0, 5, 10, 15],
    shadow: {
        inner:'inset 0px 2px 2px rgba(44, 44, 44, 0.24), inset 0px 0px 2px rgba(0, 0, 0, 0.12)',
        small: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)',
        large: '0px 0px 6px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.24)',
    }
} as Theme;