import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { useIntl } from "gatsby-plugin-intl";

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
    const intl = useIntl();

    return (
        <Container className={classes.container}>
            <Box className={classes.box}>
                <Typography className={classes.title} variant="h2">
                    {intl.formatMessage({ id: "about.title" })}
                </Typography>
                <Grid className={classes.gridContainer} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            {intl.formatMessage({ id: "about.studies.title" })}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {intl.formatMessage({ id: "about.studies.description" })}
                        </Typography>
                    </Grid>
                    <Grid className={classes.buttonContainer} item xs={12}>
                        <Button>{intl.formatMessage({ id: "about.cta" })}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
