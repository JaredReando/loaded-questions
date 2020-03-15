export interface Theme {
    colors: Colors;
    text?: {
        fontFamily: string;
        size: FontSize;
    };
    shadow: {
        inner: string;
        small: string;
        large: string;
    };
    space: number[];
    radii: number[];
}

interface Colors {
    primary: string;
    secondary: string;
    error: string;
    success: string;
}

interface FontSize {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
}