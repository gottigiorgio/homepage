'use client'

import { ThemeProvider } from "@mui/material"
import { darkTheme } from "@/theme/theme"
import { PropsWithChildren } from "react"

export function MuiThemeProvider({ children }: PropsWithChildren) {
    return <ThemeProvider theme={darkTheme}> {children} </ThemeProvider>
}
