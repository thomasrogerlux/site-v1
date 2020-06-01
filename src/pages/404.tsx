import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import { useIntl } from "gatsby-plugin-intl";
import { Link, graphql, useStaticQuery } from "gatsby";

const query = graphql`
    query {
        blob: file(relativePath: { eq: "images/blobs/404.svg" }) {
            publicURL
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.common.black,
    },
    container: {
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        padding: "50px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        zIndex: 2,
        textAlign: "center",
    },
    link: {
        color: (theme as any).palette.indigo.main,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
            color: (theme as any).palette.indigo.light,
        },
    },
    blob: {
        position: "absolute",
        width: "100%",
    },
}));

const NotFound: FC = () => {
    const classes = useStyles();
    const intl = useIntl();
    const data = useStaticQuery(query);

    return (
        <main className={classes.root}>
            <Container className={classes.container}>
                <Box className={classes.box}>
                    <img className={classes.blob} src={data.blob.publicURL} />
                    <Typography className={classes.text} variant="h1">
                        {intl.formatMessage({ id: "notfound.title" })}
                    </Typography>
                    <Typography className={classes.text} variant="body1">
                        {intl.formatMessage({ id: "notfound.description" })}
                    </Typography>
                    <Typography className={classes.text} variant="body1">
                        <Link className={classes.link} to="/">
                            {intl.formatMessage({ id: "notfound.link" })}
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </main>
    );
};

export default NotFound;
