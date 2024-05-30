import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
    color: {
        main: "#ffa726",
        mainDarker: "#FFC8DD",
        mainFaded: "#bde0fe",
        mainFadedBright: "#ffb74da6",
        list: "#f2f2f2",
        task: "#e8e8e8",
        taskHover: "rgb(250, 250, 250)",
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

export const deleteBoardButton = style({
    border: 'none',
    borderRadius: 5,
    width: 'max-content',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginBottom: 30,
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.medium,
    backgroundColor: vars.color.mainFaded,
    cursor: 'pointer',
    opacity: 0.6,
    minWidth: 150,
    ":hover" : {
        opacity: 0.8
    }
});

export const loggerButton = style({
    border: 'none',
    borderRadius: 5,
    width: 'max-content',
    marginTop: 'auto',
    marginLeft: '15px',
    marginRight: '30px',
    marginBottom: 30,
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.medium,
    backgroundColor: vars.color.mainFaded,
    cursor: 'pointer',
    opacity: 0.6,
    minWidth: 150,
    ":hover" : {
        opacity: 0.8
    }
});

