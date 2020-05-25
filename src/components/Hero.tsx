import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container, Hidden } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { HeroText } from "./HeroText";
import { HeroImages } from "./HeroImages";

const query = graphql`
    query {
        wave: file(relativePath: { eq: "images/waves/hero.svg" }) {
            publicURL
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    gridContainer: {
        backgroundColor: theme.palette.background.paper,
    },
    headerGridItem: {
        height: "48px",
    },
    contentGridItem: {
        zIndex: 2,
    },
    container: {},
    contentGridContainer: {},
    imagesGridItemMobile: {
        [theme.breakpoints.down("xs")]: {
            height: "200px",
            minHeight: "200px",
        },
        height: "300px",
        backgroundColor: theme.palette.background.paper,
    },
    textGridItemMobile: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    imagesGridItemDesktop: {
        height: "500px",
        backgroundColor: theme.palette.background.paper,
    },
    textGridItemDesktop: {
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    waveGridItem: {
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
    },
    wave: {
        filter: `drop-shadow(0px 10px 20px ${theme.palette.common.black}33)`,
    },
}));

export const Hero: FC = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);

    return (
        <Grid className={classes.gridContainer} container>
            <Grid className={classes.headerGridItem} item xs={12} />
            <Grid className={classes.contentGridItem} item xs={12}>
                <Container className={classes.container}>
                    <Hidden implementation="css" mdUp>
                        <Grid className={classes.contentGridContainer} container>
                            <Grid className={classes.imagesGridItemMobile} item xs={12}>
                                <HeroImages />
                            </Grid>
                            <Grid className={classes.textGridItemMobile} item xs={12}>
                                <HeroText />
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden implementation="css" smDown>
                        <Grid className={classes.contentGridContainer} container>
                            <Grid className={classes.textGridItemDesktop} item md={7}>
                                <HeroText />
                            </Grid>
                            <Grid className={classes.imagesGridItemDesktop} item md={5}>
                                <HeroImages />
                            </Grid>
                        </Grid>
                    </Hidden>
                </Container>
            </Grid>
            <Grid className={classes.waveGridItem} item xs={12}>
                <img className={classes.wave} src={data.wave.publicURL} />
            </Grid>
        </Grid>
    );
};
