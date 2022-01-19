import React from 'react';

export const themes = {
    light: {
        foreground: '#191919',
        background: '#ffffff',
        text: "#939393"
    },
    dark: {
        foreground: '#ffffff',
        background: '#191919',
        text: "#ffffff"
    },
};

export const ThemeContext = React.createContext(
    {
        them: themes.light,
        toggleTheme: () => { }
    }
);