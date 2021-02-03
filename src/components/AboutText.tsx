import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { useIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

import { Button } from "./Button";

const query = graphql`
    query {
        metadata: site {
            siteMetadata {
                contacts {
                    email
                    resume {
                        downloadNameEN
                        downloadNameFR
                    }
                }
            }
        }
        resumeEN: file(relativePath: { eq: "documents/resume-en.pdf" }) {
            publicURL
        }
        resumeFR: file(relativePath: { eq: "documents/resume-fr.pdf" }) {
            publicURL
        }
    }
`;

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
        marginTop: theme.spacing(16),
    },
    buttonContainer: {
        marginTop: theme.spacing(4),
    },
}));

export const AboutText: FC = () => {
    const classes = useStyles();
    const intl = useIntl();
    const data = useStaticQuery(query);

    return (
        <Container className={classes.container}>
            <Box className={classes.box}>
                <Typography className={classes.title} variant="h2">
                    {intl.formatMessage({ id: "about.title" })}
                </Typography>
                <Grid className={classes.gridContainer} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            {intl.formatMessage({ id: "about.experience.title" })}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item>
                            <Typography variant="h4">
                                {intl.formatMessage({ id: "about.experience.qantev.title" })}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {intl.formatMessage({ id: "about.experience.qantev.description" })}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item>
                            <Typography variant="h4">
                                {intl.formatMessage({ id: "about.experience.indigen.title" })}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {intl.formatMessage({ id: "about.experience.indigen.description" })}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            {intl.formatMessage({ id: "about.education.title" })}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item>
                            <Typography variant="h4">
                                {intl.formatMessage({ id: "about.education.inha.title" })}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {intl.formatMessage({ id: "about.education.inha.description" })}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item>
                            <Typography variant="h4">
                                {intl.formatMessage({ id: "about.education.epitech.title" })}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {intl.formatMessage({ id: "about.education.epitech.description" })}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.buttonContainer} item xs={12}>
                        <Button
                            href={data[`resume${intl.locale.toUpperCase()}`].publicURL}
                            download={
                                data.metadata.siteMetadata.contacts.resume[
                                    `downloadName${intl.locale.toUpperCase()}`
                                ]
                            }
                        >
                            {intl.formatMessage({ id: "about.cta" })}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
