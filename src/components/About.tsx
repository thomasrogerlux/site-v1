import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container, Hidden } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { AboutImages } from "./AboutImages";
import { AboutText } from "./AboutText";

const query = graphql`
    query {
        wave: file(relativePath: { eq: "images/waves/about.svg" }) {
            publicURL
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    gridContainer: {
        backgroundColor: theme.palette.background.paper,
    },
    contentGridItem: {
        zIndex: 2,
    },
    contentGridContainer: {},
    imagesGridItemMobile: {
        [theme.breakpoints.down("xs")]: {
            height: "200px",
            minHeight: "200px",
        },
        alignSelf: "center",
        marginTop: theme.spacing(4),
        height: "300px",
    },
    textGridItemMobile: {},
    imagesGridItemDesktop: {
        alignSelf: "center",
        height: "500px",
    },
    textGridItemDesktop: {},
    waveGridItem: {
        overflow: "hidden",
        backgroundColor: theme.palette.common.black,
    },
    wave: {
        filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.2))",
    },
    wavePadFix: {
        marginTop: "-2px",
    },
}));

export const About: FC = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);

    return (
        <Grid className={classes.gridContainer} container>
            <Grid className={classes.contentGridItem} item xs={12}>
                <Container>
                    <Hidden implementation="css" mdUp>
                        <Grid className={classes.contentGridContainer} container>
                            <Grid className={classes.textGridItemMobile} item xs={12}>
                                <AboutText />
                            </Grid>
                            <Grid className={classes.imagesGridItemMobile} item xs={12}>
                                <AboutImages />
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden implementation="css" smDown>
                        <Grid className={classes.contentGridContainer} container>
                            <Grid className={classes.imagesGridItemDesktop} item md={5}>
                                <AboutImages />
                            </Grid>
                            <Grid className={classes.textGridItemDesktop} item md={7}>
                                <AboutText />
                            </Grid>
                        </Grid>
                    </Hidden>
                </Container>
            </Grid>
            <Grid className={classes.waveGridItem} item xs={12}>
                <div className={classes.wavePadFix}>
                    <img className={classes.wave} src={data.wave.publicURL} />
                </div>
            </Grid>
        </Grid>
    );
};
