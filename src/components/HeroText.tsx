import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";
import { useIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

import { Button } from "./Button";

const query = graphql`
    query {
        metadata: site {
            siteMetadata {
                contacts {
                    email
                }
            }
        }
    }
`;

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
    const intl = useIntl();
    const data = useStaticQuery(query);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        {intl.formatMessage({ id: "hero.uptitle" })}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h1">
                        {intl.formatMessage({ id: "hero.title" })}
                    </Typography>
                    <Typography className={classes.title} color="primary" variant="h1">
                        {intl.formatMessage({ id: "hero.title2" })}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        {intl.formatMessage({ id: "hero.subtitle" })}
                    </Typography>
                    <Typography variant="body1">
                        {intl.formatMessage({ id: "hero.subtitle2" })}
                    </Typography>
                </Grid>
                <Grid className={classes.buttonGridItem} item>
                    <Button href={`mailto:${data.metadata.siteMetadata.contacts.email}`}>
                        {intl.formatMessage({ id: "hero.cta" })}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};
