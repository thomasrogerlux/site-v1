import React, { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import { Metadata } from "../components/Metadata";
import muiTheme from "../theme";
import "../styles.css"

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Metadata />
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </div>
    );
};

export default Layout;
