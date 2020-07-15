module.exports = {
    siteMetadata: {
        siteUrl: `https://thomasrogerlux.dev`,
        contacts: {
            github: "https://github.com/thomasrogerlux",
            linkedin: "https://www.linkedin.com/in/thomasrogerlux/",
            email: "thomas@rogerlux.dev",
            illustration: "lvilard@hotmail.com",
            resume: {
                downloadNameEN: "resume-thomasrogerlux.pdf",
                downloadNameFR: "cv-thomasrogerlux.pdf",
                downloadNameKO: "resume-thomasrogerlux.pdf",
            }
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `static`,
                path: `${__dirname}/src/static`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Thomas Roger Lux`,
                short_name: `TRL`,
                start_url: `/`,
                background_color: `#29B6F6`,
                theme_color: `#29B6F6`,
                display: `minimal-ui`,
                icon: `src/static/images/logos/trl.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-layout`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/locales`,
                languages: [`en`, `fr`], // [`en`, `fr`, `ko`],
                defaultLanguage: `en`,
                redirect: true,
            },
        },
    ],
};
