import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import { Service } from "./Service";

const query = graphql`
    query {
        backendBlob: file(relativePath: { eq: "images/blobs/backend.svg" }) {
            publicURL
        }
        devopsBlob: file(relativePath: { eq: "images/blobs/devops.svg" }) {
            publicURL
        }
        frontendBlob: file(relativePath: { eq: "images/blobs/frontend.svg" }) {
            publicURL
        }
        backendIcon: file(relativePath: { eq: "images/icons/backend.svg" }) {
            publicURL
        }
        devopsIcon: file(relativePath: { eq: "images/icons/devops.svg" }) {
            publicURL
        }
        frontendIcon: file(relativePath: { eq: "images/icons/frontend.svg" }) {
            publicURL
        }
        wave: file(relativePath: { eq: "images/waves/services.svg" }) {
            publicURL
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    gridContainer: {
        backgroundColor: theme.palette.background.default,
    },
    contentGridItem: {},
    contentGridContainer: {},
    titleGridItem: {
        marginBottom: theme.spacing(8),
    },
    title: {
        borderBottom: `6px solid ${theme.palette.primary.main}`,
        display: "inline",
    },
    servicesGridItem: {},
    servicesGridContainer: {},
    serviceGridItem: {
        [theme.breakpoints.down("sm")]: {
            height: "unset",
            marginBottom: theme.spacing(4),
        },
        height: "400px",
    },
    serviceBackendGridItem: {},
    serviceDevOpsGridItem: {},
    serviceFrontendGridItem: {},
    waveGridItem: {
        overflow: "hidden",
    },
    wavePadFix: {
        marginBottom: "-6px",
    },
    wave: {
        filter: `drop-shadow(0px 10px 20px ${theme.palette.common.black}33)`,
    },
}));

export const Services: FC = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);
    const intl = useIntl();

    return (
        <Grid className={classes.gridContainer} container>
            <Grid className={classes.contentGridItem} item xs={12}>
                <Container>
                    <Grid className={classes.contentGridContainer} container>
                        <Grid className={classes.titleGridItem} item xs={12}>
                            <Typography className={classes.title} variant="h2">
                                {intl.formatMessage({ id: "services.title" })}
                            </Typography>
                        </Grid>
                        <Grid className={classes.servicesGridItem} item xs={12}>
                            <Grid className={classes.servicesGridContainer} container>
                                <Grid
                                    className={clsx(
                                        classes.serviceGridItem,
                                        classes.serviceBackendGridItem
                                    )}
                                    item
                                    xs={12}
                                    md={4}
                                >
                                    <Service
                                        title={intl.formatMessage({ id: "services.backend.title" })}
                                        description={intl.formatMessage({
                                            id: "services.backend.description",
                                        })}
                                        blob={data.backendBlob.publicURL}
                                        blobColor="sky"
                                        icon={data.backendIcon.publicURL}
                                    />
                                </Grid>
                                <Grid
                                    className={clsx(
                                        classes.serviceGridItem,
                                        classes.serviceDevOpsGridItem
                                    )}
                                    item
                                    xs={12}
                                    md={4}
                                >
                                    <Service
                                        title={intl.formatMessage({ id: "services.devops.title" })}
                                        description={intl.formatMessage({
                                            id: "services.devops.description",
                                        })}
                                        blob={data.devopsBlob.publicURL}
                                        blobColor="indigo"
                                        icon={data.devopsIcon.publicURL}
                                    />
                                </Grid>
                                <Grid
                                    className={clsx(
                                        classes.serviceGridItem,
                                        classes.serviceFrontendGridItem
                                    )}
                                    item
                                    xs={12}
                                    md={4}
                                >
                                    <Service
                                        title={intl.formatMessage({
                                            id: "services.frontend.title",
                                        })}
                                        description={intl.formatMessage({
                                            id: "services.frontend.description",
                                        })}
                                        blob={data.frontendBlob.publicURL}
                                        blobColor="aqua"
                                        icon={data.frontendIcon.publicURL}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
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
