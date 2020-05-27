import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

interface FooterLinkProps {
    icon: string;
    url: string;
    download?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        border: `2px solid ${theme.palette.common.white}`,
        borderRadius: "50%",
    },
    image: {
        width: "24px",
        height: "24px",
    },
}));

export const FooterLink: FC<FooterLinkProps> = ({ url, icon, download }) => {
    const classes = useStyles();

    return (
        <IconButton className={classes.button} href={url} download={download}>
            <img className={classes.image} src={icon} />
        </IconButton>
    );
};
