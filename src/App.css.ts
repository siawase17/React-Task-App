import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
    color: {
        main: "#ffa726",
        mainDarker: "#FFC8DD",
        mainFaded: "#bde0fe",
        mainFadedBright: "#ffb74da6",
        list: "rgb(235, 236, 240)",
        task: "rgb(225, 225, 225)",
        taskHover: "rgb(245, 245, 245)",
        brightText: "#FFF",
        darkText: "rgb(24, 42, 77)",
        secondaryDarkText: "#f3c4fb",
        secondaryDarkTextHover: "rgb(218, 219, 226)",
        selectedTab: "#a2d2ff",
        updateButton: "rgb(237, 180, 88)",
        deleteButton: "rgb(237, 51, 88)",
    },
    fontSizing: {
        T1: "32px",
        T2: "20px",
        T3: "14px",
        T4: "12px",
        P1: "10px",    
    },
    spacing: {
        small: "5px",
        medium: "10px",
        big1: "20px",
        big2: "15px",
        listSpacing: "30px"
    },
    font: {
        body: "arial",
    },
    shadow: {
        basic: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
    },
    minWidth: {
        list: "200px"
    }
});

export const appContainer = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: 'max-content',
    width: '100vw',
});

export const board = style({
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
});

export const buttons = style({
    marginTop: 'auto',
    paddingLeft: vars.spacing.big2
});

// vars.color.main