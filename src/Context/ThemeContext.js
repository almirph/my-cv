import React from 'react';

export const themes = {
    light: {
        foreground: '#191919',
        background: '#ffffff',
        text: "#939393",
        footer: "#191919"
    },
    dark: {
        foreground: '#ffffff',
        background: '#191919',
        text: "#ffffff",
        footer: "#000000"
    },
};

export const ThemeContext = React.createContext(
    {
        theme: themes.light,
        toggleTheme: () => { }
    }
);