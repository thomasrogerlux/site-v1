import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button as BaseButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        color: theme.palette.common.white,
        fontFamily: '"Rubik"',
        fontWeight: 500,
        fontSize: "16px",
        border: `6px solid ${theme.palette["aqua"].lighter}`,
        boxShadow: `10px 10px 20px ${theme.palette["aqua"].shadow}80`,

        "&:hover": {
            backgroundColor: theme.palette["aqua"].light,
            boxShadow: `10px 10px 20px ${theme.palette["aqua"].shadow}99`,
        },
    },
}));

export const Button: FC = ({ children }) => {
    const classes = useStyles();

    return (
        <BaseButton className={classes.button} color="secondary" variant="contained">
            {children}
        </BaseButton>
    );
}
