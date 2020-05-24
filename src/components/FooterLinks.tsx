import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { FooterLink } from "./FooterLink";

const query = graphql`
    query {
        metadata: site {
            siteMetadata {
                contacts {
                    github
                    linkedin
                    email
                }
            }
        }
        githubIcon: file(relativePath: { eq: "images/icons/github.svg" }) {
            publicURL
        }
        linkedinIcon: file(relativePath: { eq: "images/icons/linkedin.svg" }) {
            publicURL
        }
        emailIcon: file(relativePath: { eq: "images/icons/email.svg" }) {
            publicURL
        }
        resumeIcon: file(relativePath: { eq: "images/icons/resume.svg" }) {
            publicURL
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    gridContainer: {
        display: "flex",
        justifyContent: "center",
    },
    gridItem: {},
}));

export const FooterLinks: FC = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);

    return (
        <Grid className={classes.gridContainer} container spacing={4}>
            <Grid className={classes.gridItem} item>
                <FooterLink
                    icon={data.githubIcon.publicURL}
                    url={data.metadata.siteMetadata.contacts.github}
                />
            </Grid>
            <Grid className={classes.gridItem} item>
                <FooterLink
                    icon={data.linkedinIcon.publicURL}
                    url={data.metadata.siteMetadata.contacts.linkedin}
                />
            </Grid>
            <Grid className={classes.gridItem} item>
                <FooterLink
                    icon={data.emailIcon.publicURL}
                    url={`mailto:${data.metadata.siteMetadata.contacts.email}`}
                />
            </Grid>
            <Grid className={classes.gridItem} item>
                <FooterLink icon={data.resumeIcon.publicURL} url="" />
            </Grid>
        </Grid>
    );
};
