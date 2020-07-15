import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Box, Container, Typography, Link } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import { FooterLinks } from "./FooterLinks";
import { Image } from "./Image";

const query = graphql`
    query {
        metadata: site {
            siteMetadata {
                contacts {
                    illustration
                }
            }
        }
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
    box: {
        backgroundColor: theme.palette.common.black,
        paddingBottom: theme.spacing(20),
    },
    container: {
        padding: theme.spacing(4),
    },
    gridContainer: {},
    logoGridItem: {
        display: "flex",
        justifyContent: "center",
    },
    logoContainer: {
        height: "64px",
        width: "64px",
    },
    logo: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    linksGridItem: {},
    textGridItem: {},
    text: {
        color: (theme as any).palette.text.secondaryDark,
    },
    link: {
        color: (theme as any).palette.indigo.main,
        "&:hover": {
            textDecoration: "none",
            color: (theme as any).palette.indigo.light,
        },
    },
}));

export const Footer: FC = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);
    const intl = useIntl();

    return (
        <Box className={classes.box}>
            <Container className={classes.container}>
                <Grid className={classes.gridContainer} container spacing={6}>
                    <Grid className={classes.logoGridItem} item xs={12}>
                        <Box className={classes.logoContainer}>
                            <Image
                                contain
                                className={classes.logo}
                                fluid={data.logo.childImageSharp.fluid}
                            />
                        </Box>
                    </Grid>
                    <Grid className={classes.linksGridItem} item xs={12}>
                        <FooterLinks />
                    </Grid>
                    <Grid className={classes.textGridItem} item xs={12}>
                        <Typography className={classes.text} variant="body1" align="center">
                            {intl.formatMessage({ id: "footer.copyrights.website" })}
                        </Typography>
                        <Typography className={classes.text} variant="body1" align="center">
                            {intl.formatMessage({ id: "footer.copyrights.illustrations.created" }) +
                                " "}
                            <Link
                                className={classes.link}
                                href={`mailto:${data.metadata.siteMetadata.contacts.illustration}`}
                            >
                                {intl.formatMessage({
                                    id: "footer.copyrights.illustrations.author",
                                })}
                            </Link>
                            {" " +
                                intl.formatMessage({
                                    id: "footer.copyrights.illustrations.rights",
                                })}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
