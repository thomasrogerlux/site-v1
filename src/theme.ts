import { createMuiTheme } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
    palette: {
        type: "light",
        indigo: {
            main: "#5C6BC0",
            light: "#7986CB",
            shadow: "#7986CB",
        },
        sky: {
            main: "#29B6F6",
            shadow: "#29B6F6",
        },
        aqua: {
            main: "#4DD0E1",
            light: "#80DEEA",
            lighter: "#B2EBF2",
            shadow: "#80DEEA",
        },
        common: {
            black: "#2E3440",
            white: "#F8F9FB",
        },
        primary: {
            main: "#29B6F6",
        },
        secondary: {
            main: "#4DD0E1",
        },
        text: {
            primary: "#2E3440",
            secondary: "#4C566A",
            secondaryDark: "#D8DEE9",
            disabled: "#D8DEE9",
            hint: "#D8DEE9",
        },
        error: {
            main: "#F59099",
        },
        background: {
            default: "#ECEFF4",
            paper: "#F8F9FB",
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: "'Noto Sans', 'Helvetica', 'Arial', 'sans-serif'",
        h3: {
            fontSize: 24,
            fontWeight: 500,
            fontFamily: "Rubik",
        },
        h4: {
            fontSize: 16,
            fontWeight: 500,
            fontFamily: "Rubik",
        },
        body1: {
            fontSize: 16,
            fontFamily: "Noto Sans",
            color: "#4C566A",
        },
    },
} as any);

muiTheme.typography.h1 = {
    fontSize: 54,
    fontWeight: 500,
    fontFamily: "Rubik",
    [muiTheme.breakpoints.down("xs")]: {
        fontSize: 46,
    },
};

muiTheme.typography.h2 = {
    fontSize: 36,
    fontWeight: 500,
    fontFamily: "Rubik",
    [muiTheme.breakpoints.down("xs")]: {
        fontSize: 30,
    },
};

export default muiTheme;
