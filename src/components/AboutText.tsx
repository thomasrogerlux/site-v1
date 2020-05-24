import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from "@material-ui/core";

import { Button } from "./Button";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: "100%",
    },
    box: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
    },
    title: {
        top: theme.spacing(4),
        position: "absolute",
        left: 0,
        borderBottom: `6px solid ${theme.palette.primary.main}`,
        display: "inline",
        marginBottom: theme.spacing(6),
    },
    gridContainer: {
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(16),
        },
        marginTop: theme.spacing(12),
    },
    buttonContainer: {
        marginTop: theme.spacing(4),
    },
}));

export const AboutText: FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Box className={classes.box}>
                <Typography className={classes.title} variant="h2">
                    About Me
                </Typography>
                <Grid className={classes.gridContainer} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3">Studies</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </Typography>
                    </Grid>
                    <Grid className={classes.buttonContainer} item xs={12}>
                        <Button>Download Resume</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
