import React, { FC, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Menu, MenuItem, Box, IconButton, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { changeLocale, useIntl } from "gatsby-plugin-intl";

const query = graphql`
    query {
        en: file(relativePath: { eq: "images/flags/uk.svg" }) {
            publicURL
        }
        fr: file(relativePath: { eq: "images/flags/fr.svg" }) {
            publicURL
        }
        ko: file(relativePath: { eq: "images/flags/kr.svg" }) {
            publicURL
        }
    }
`;

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        width: "32px",
        height: "32px",
        padding: 0,
    },
    image: {
        width: "24px",
        height: "24px",
    },
    itemBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    itemText: {
        marginLeft: theme.spacing(2),
    },
}));

export const LanguageMenu: FC = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const data = useStaticQuery(query);
    const intl = useIntl();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = (lang: string) => {
        changeLocale(lang);
        handleClose();
    };

    return (
        <Box>
            <IconButton className={classes.button} onClick={handleClick}>
                <img className={classes.image} src={data[intl.locale].publicURL} />
            </IconButton>
            <Menu anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleClose}>
                <MenuItem onClick={() => handleSubmit("en")}>
                    <Box className={classes.itemBox}>
                        <img className={classes.image} src={data.en.publicURL} />
                        <Typography className={classes.itemText} variant="body1">
                            {intl.formatMessage({ id: "header.lang.english" })}
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleSubmit("fr")}>
                    <Box className={classes.itemBox}>
                        <img className={classes.image} src={data.fr.publicURL} />
                        <Typography className={classes.itemText} variant="body1">
                            {intl.formatMessage({ id: "header.lang.french" })}
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleSubmit("ko")}>
                    <Box className={classes.itemBox}>
                        <img className={classes.image} src={data.ko.publicURL} />
                        <Typography className={classes.itemText} variant="body1">
                            {intl.formatMessage({ id: "header.lang.korean" })}
                        </Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </Box>
    );
};
