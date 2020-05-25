import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box, Typography, Hidden, Grid, Link } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import { Image } from "./Image";
import { LanguageMenu } from "./LanguageMenu";

const query = graphql`
    query {
        logo: file(relativePath: { eq: "images/logos/trl.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        height: "48px",
        backgroundColor: theme.palette.common.black,
    },
    toolbar: {
        minHeight: "100%",
        maxHeight: "100%",
    },
    logoBox: {
        height: "36px",
        width: "36px",
    },
    logo: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    title: {
        paddingLeft: theme.spacing(1),
        color: theme.palette.common.white,
    },
    gridContainer: {
        width: "auto",
        display: "flex",
        alignItems: "center",
    },
    link: {
        fontFamily: "Rubik",
        fontWeight: 500,
        color: theme.palette.common.white,
        "&:hover": {
            textDecoration: "none",
            color: (theme as any).palette.text.secondaryDark,
        },
    },
}));

export const Header: FC = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);
    const intl = useIntl();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.logoBox}>
                    <Image
                        contain
                        className={classes.logo}
                        fluid={data.logo.childImageSharp.fluid}
                    />
                </Box>
                <Typography className={classes.title} variant="h4">
                    {intl.formatMessage({ id: "common.brand" })}
                </Typography>
                <Box flexGrow={1} />
                <Hidden xsDown>
                    <Grid className={classes.gridContainer} container spacing={2}>
                        <Grid item>
                            <Link className={classes.link} href="#">
                                {intl.formatMessage({ id: "header.actions.contact" })}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link className={classes.link} href="#">
                                {intl.formatMessage({ id: "header.actions.resume" })}
                            </Link>
                        </Grid>
                        <Grid item>
                            <LanguageMenu />
                        </Grid>
                    </Grid>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};
