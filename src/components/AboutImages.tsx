import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";

import { Image } from "./Image";

const query = graphql`
    query {
        blob: file(relativePath: { eq: "images/blobs/about.svg" }) {
            publicURL
        }

        illustration: file(relativePath: { eq: "images/illustrations/working.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    image: {
        width: "90%",
        maxHeight: "90%",
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
        overflow: "inherit !important"
    },
    blob: {
        filter: `drop-shadow(10px 10px 20px ${(theme as any).palette.indigo.shadow}B3)`,
    },
    illustration: {
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            maxHeight: "90%",
        },
        filter: `drop-shadow(10px 10px 20px ${theme.palette.common.black}66)`,
    },
}));

export const AboutImages: FC = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);

    return (
        <Container className={classes.container}>
            <img
                className={clsx(classes.image, classes.blob)}
                src={data.blob.publicURL}
            />
            <Image
                absolute
                contain
                className={clsx(classes.image, classes.illustration)}
                fluid={data.illustration.childImageSharp.fluid}
            />
        </Container>
    );
};
