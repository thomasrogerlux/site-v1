import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

interface FooterLinkProps {
    icon: string;
    url: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        border: `2px solid ${theme.palette.common.white}`,
        borderRadius: "50%",
    },
    image: {
        width: "24px",
        height: "24px"
    },
}));

export const FooterLink: FC<FooterLinkProps> = ({ url, icon }) => {
    const classes = useStyles();

    return (
        <IconButton className={classes.button} href={url}>
            <img className={classes.image} src={icon} />
        </IconButton>
    );
}
