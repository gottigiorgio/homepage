import { createTheme, alpha, ThemeOptions } from "@mui/material/styles"
import { itIT } from "@mui/material/locale"

const primary = "#8B5CF6"
const secondary = "#6D28D9"
const background = "#09090C"
const surface = "#130F19"

declare module "@mui/material/styles" {
    interface Palette {
        accent: Palette["primary"]
        surface: Palette["primary"]
        hover: Palette["primary"]
    }

    interface PaletteOptions {
        accent?: PaletteOptions["primary"]
        surface?: PaletteOptions["primary"]
        hover?: PaletteOptions["primary"]
    }
}

const components: ThemeOptions["components"] = {
    MuiButton: {
        defaultProps: {
            variant: "contained",
        },
        styleOverrides: {
            root: {
                borderRadius: 10,
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "none",

                "&:hover": {
                    boxShadow: "none",
                },
            },
        },
    },

    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: 12,
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 14,
            },
        },
    },

    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: 8,
                fontWeight: 600,
            },
        },
    },

    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                borderRadius: 8,
            },
        },
    },
}

const typography: ThemeOptions["typography"] = {
    fontFamily: '"Inter", "Roboto", sans-serif',

    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600 },
}

export const darkTheme = createTheme(
    {
        typography,

        palette: {
            mode: "dark",

            primary: {
                main: primary,
                contrastText: "#0A0A0F",
            },

            secondary: {
                main: secondary,
                contrastText: "#FFFFFF",
            },

            accent: {
                main: primary,
            },

            surface: {
                main: surface,
            },

            hover: {
                main: alpha(primary, 0.1),
            },

            background: {
                default: background,
                paper: surface,
            },

            divider: "#241F2E",

            text: {
                primary: "#F2F0F5",
                secondary: "#A399AD",
            },
        },

        components,
    },
    itIT
)
