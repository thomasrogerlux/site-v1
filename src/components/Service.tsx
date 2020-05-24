import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";

interface ServiceProps {
    blob: string;
    blobColor: string;
    icon: string;
    title: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: "100%",
        height: "100%",
    },
    gridContainer: {
        width: "inherit",
        height: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    imagesGridItem: {
        [theme.breakpoints.down("sm")]: {
            height: "120px",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up("md")]: {
            marginBottom: theme.spacing(4),
        },
        position: "relative",
        width: "40%",
        height: "40%",
    },
    textGridContainer: {},
    titleGridItem: {},
    descriptionGridItem: {},
    text: {
        [theme.breakpoints.only("sm")]: {
            textAlign: "start",
        },
        textAlign: "center",
    },
    image: {
        objectFit: "contain",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
    },
    blob: {
        width: "100%",
        maxHeight: "100%",
        filter: (props: ServiceProps) =>
            `drop-shadow(10px 10px 20px ${theme.palette[props.blobColor].shadow}B3)`,
    },
    icon: {
        width: "60%",
        maxHeight: "60%",
        filter: `drop-shadow(10px 10px 20px ${theme.palette.common.black}66)`,
    },
}));

export const Service: FC<ServiceProps> = (props) => {
    const { blob, icon, title, description } = props;
    const classes = useStyles(props);

    return (
        <Container className={classes.container}>
            <Grid className={classes.gridContainer} container>
                <Grid className={classes.imagesGridItem} item xs={12} sm={4} md={12}>
                    <img
                        className={clsx(classes.image, classes.blob)}
                        src={blob}
                    />
                    <img
                        className={clsx(classes.image, classes.icon)}
                        src={icon}
                    />
                </Grid>
                <Grid
                    className={classes.textGridContainer}
                    item
                    container
                    xs={12}
                    sm={8}
                    md={12}
                    spacing={2}
                >
                    <Grid className={classes.titleGridItem} item xs={12}>
                        <Typography className={classes.text} variant="h3">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid className={classes.descriptionGridItem} item xs={12}>
                        <Typography className={classes.text} variant="body1">
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
