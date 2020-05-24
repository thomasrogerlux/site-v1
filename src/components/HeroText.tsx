import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

import {Button} from "./Button";

const useStyles = makeStyles((theme: Theme) => ({
    buttonGridItem: {
        marginTop: theme.spacing(4),
    },
    title: {
        lineHeight: 1.2,
    },
}));

export const HeroText: FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1">Hi, my name is</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h1">
                        Thomas Roger Lux
                    </Typography>
                    <Typography className={classes.title} color="primary" variant="h1">
                        I build stuff for the web.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        I'm a software engineer based in Paris, France.
                    </Typography>
                    <Typography variant="body1">
                        I can develop your project from the first line of code to the production.
                    </Typography>
                </Grid>
                <Grid className={classes.buttonGridItem} item>
                    <Button>Contact Me</Button>
                </Grid>
            </Grid>
        </Container>
    );
}
