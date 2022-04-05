import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';


function AppBarComponent() {
    return (
        <div>
            <AppBar color='secondary'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComponent;