import { Switch } from '@material-ui/core';
import React from 'react';
import { ThemeContext, themes } from '../../Context/ThemeContext';
import { useStyles } from "./style";

export const ThemeSwitcher = () => {

    const classes = useStyles();

    return <div className={classes.menu}>
        <ThemeContext.Consumer>
            {
                ({theme, toogleTheme}) => <Switch
                    checked={theme === themes.light}
                    onChange={toogleTheme}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            }

        </ThemeContext.Consumer>
    </div>
} 
