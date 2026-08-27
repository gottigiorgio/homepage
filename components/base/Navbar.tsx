'use client'

import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
    useTheme,
} from "@mui/material"

import { Close, Menu } from "mdi-material-ui"

import { useState } from "react"
import Image from "next/image"
import { navLinks, profile } from "@/components/data/site"

export default function Navbar() {
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 })

    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={0}
            sx={{
                backdropFilter: scrolled ? "blur(12px)" : "none",
                backgroundColor: scrolled ? "rgba(9,9,12,0.75)" : "transparent",
                borderBottom: "1px solid",
                borderColor: scrolled ? "divider" : "transparent",
                transition: theme.transitions.create(
                    ["background-color", "border-color", "backdrop-filter"],
                    { duration: 200 }
                ),
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>

                    {/* Logo */}
                    <Stack
                        component="a"
                        href="#home"
                        direction="row"
                        sx={{
                            alignItems: "center",
                            gap: 1.2,
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "2px solid",
                                borderColor: "accent.main",
                            }}
                        >
                            <Image src={profile.avatar} alt={profile.username} fill style={{ objectFit: "cover" }} />
                        </Box>
                        <Typography sx={{ fontWeight: 800, letterSpacing: -0.3 }} variant="h6">
                            {profile.username}
                        </Typography>
                    </Stack>

                    {/* Tabs desktop */}
                    <Stack
                        direction="row"
                        sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}
                    >
                        {navLinks.map((tab) => (
                            <Button
                                key={tab.href}
                                component="a"
                                href={tab.href}
                                disableRipple
                                variant="text"
                                sx={{
                                    px: 1.5,
                                    py: 0.75,
                                    color: "text.secondary",
                                    fontWeight: 500,
                                    borderRadius: "8px",
                                    transition: "color 150ms ease, background-color 150ms ease",
                                    "&:hover": {
                                        backgroundColor: "hover.main",
                                        color: "text.primary",
                                    },
                                }}
                            >
                                {tab.label}
                            </Button>
                        ))}
                    </Stack>

                    {/* CTA desktop */}
                    <Button
                        component="a"
                        href="#contatti"
                        className="hover-glow"
                        sx={{ display: { xs: "none", md: "inline-flex" }, overflow: "visible" }}
                    >
                        Contattami
                    </Button>

                    {/* Trigger mobile */}
                    <IconButton
                        onClick={() => setOpen(true)}
                        aria-label="Apri il menu"
                        sx={{
                            display: { xs: "flex", md: "none" },
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: "10px",
                        }}
                    >
                        <Menu />
                    </IconButton>

                </Toolbar>
            </Container>

            {/* Drawer mobile */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{ paper: { sx: {
                    width: 280,
                    backgroundColor: "background.default",
                    backgroundImage: "none",
                }},}}
            >
                <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>

                    <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                        <Typography sx={{ fontWeight: 800 }}>{profile.username}</Typography>
                        <IconButton onClick={() => setOpen(false)} aria-label="Chiudi il menu" size="small">
                            <Close />
                        </IconButton>
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    <Stack sx={{ gap: 0.5, flexGrow: 1 }}>
                        {navLinks.map((tab) => (
                            <Button
                                key={tab.href}
                                component="a"
                                href={tab.href}
                                onClick={() => setOpen(false)}
                                variant="text"
                                sx={{
                                    justifyContent: "flex-start",
                                    px: 1.5,
                                    py: 1.1,
                                    borderRadius: "10px",
                                    color: "text.secondary",
                                    fontWeight: 500,
                                    "&:hover": { backgroundColor: "hover.main" },
                                }}
                            >
                                {tab.label}
                            </Button>
                        ))}
                    </Stack>

                </Box>
            </Drawer>

        </AppBar>
    )
}
