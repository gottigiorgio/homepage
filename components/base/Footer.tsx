'use client'

import { Box, Container, Divider, Link as MuiLink, Stack, Typography } from "@mui/material"
import { navLinks, profile } from "@/components/data/site"

// Link verso il resto dell'ecosistema: essendo un sito a pagina singola, il
// footer e' l'unico punto che offre ai crawler percorsi verso gli altri domini
// (e viceversa e' da qui che passa parte dell'autorevolezza del dominio).
const ecosystemLinks = [
    { label: "Urban Boi", href: "https://urban.gottigiorgio.dev" },
    { label: "GDP", href: "https://urban.gottigiorgio.dev/gdp" },
    { label: "Development Lounge", href: "https://discord.gottigiorgio.dev" },
    { label: "Status dei servizi", href: "https://status.gottigiorgio.dev" },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", mt: "auto" }}>
            <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    sx={{ gap: { xs: 4, sm: 8 }, justifyContent: "space-between" }}
                >
                    <Stack sx={{ gap: 1, maxWidth: 320 }}>
                        <Typography sx={{ fontWeight: 800 }}>{profile.username}</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                            {profile.role}
                        </Typography>
                    </Stack>

                    <Stack
                        component="nav"
                        aria-label="Navigazione a pie' di pagina"
                        direction={{ xs: "column", sm: "row" }}
                        sx={{ gap: { xs: 3, sm: 6 } }}
                    >
                        <Stack sx={{ gap: 1 }}>
                            <Typography component="p" variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                                Sezioni
                            </Typography>
                            {navLinks.map((link) => (
                                <MuiLink
                                    key={link.href}
                                    href={link.href}
                                    variant="body2"
                                    underline="hover"
                                    sx={{ color: "text.secondary", "&:hover": { color: "accent.main" } }}
                                >
                                    {link.label}
                                </MuiLink>
                            ))}
                        </Stack>

                        <Stack sx={{ gap: 1 }}>
                            <Typography component="p" variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                                Ecosistema
                            </Typography>
                            {ecosystemLinks.map((link) => (
                                <MuiLink
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="body2"
                                    underline="hover"
                                    sx={{ color: "text.secondary", "&:hover": { color: "accent.main" } }}
                                >
                                    {link.label}
                                </MuiLink>
                            ))}
                        </Stack>

                        <Stack sx={{ gap: 1 }}>
                            <Typography component="p" variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                                Contatti
                            </Typography>
                            <MuiLink
                                href="mailto:business@gottigiorgio.dev"
                                variant="body2"
                                underline="hover"
                                sx={{ color: "text.secondary", "&:hover": { color: "accent.main" } }}
                            >
                                business@gottigiorgio.dev
                            </MuiLink>
                            <MuiLink
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="body2"
                                underline="hover"
                                sx={{ color: "text.secondary", "&:hover": { color: "accent.main" } }}
                            >
                                GitHub
                            </MuiLink>
                            <MuiLink
                                href="https://t.me/gottigiorgio"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="body2"
                                underline="hover"
                                sx={{ color: "text.secondary", "&:hover": { color: "accent.main" } }}
                            >
                                Telegram
                            </MuiLink>
                        </Stack>
                    </Stack>
                </Stack>

                <Divider sx={{ my: { xs: 3.5, md: 4 } }} />

                <Typography variant="body2" sx={{ color: "text.disabled", textAlign: "center" }}>
                    {year} &copy; {profile.username}, tutti i diritti riservati.
                </Typography>
            </Container>
        </Box>
    )
}
