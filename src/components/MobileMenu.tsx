import React, { FC, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Menu, MenuItem, Box, IconButton, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

const query = graphql`
    query {
        menu: file(relativePath: { eq: "images/icons/menu.svg" }) {
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
}));

export const MobileMenu: FC = () => {
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

    const handleContact = () => {
        handleClose();
    };

    const handleResume = () => {
        handleClose();
    };

    return (
        <Box>
            <IconButton className={classes.button} onClick={handleClick}>
                <img className={classes.image} src={data.menu.publicURL} />
            </IconButton>
            <Menu anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleClose}>
                <MenuItem onClick={handleContact}>
                    <Typography variant="body1">
                        {intl.formatMessage({ id: "header.actions.contact" })}
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleResume}>
                    <Typography variant="body1">
                        {intl.formatMessage({ id: "header.actions.resume" })}
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};
