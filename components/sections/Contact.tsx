'use client'

import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material"
import { contacts } from "@/components/data/site"

export default function Contact() {
    return (
        <Box id="contatti" sx={{ py: { xs: 8, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack sx={{ alignItems: "center", textAlign: "center", gap: 1, mb: 5 }}>
                    <Typography component="h2" variant="h4" sx={{ fontWeight: 800 }}>
                        Contatti
                    </Typography>
                    <Typography sx={{ color: "text.secondary", maxWidth: 610 }}>
                        Per commissioni, lavori, collaborazioni o semplicemente per una chiacchierata:
                        mi trovate qui.
                    </Typography>
                </Stack>

                <Grid container spacing={2.5} sx={{ justifyContent: "center" }}>
                    {contacts.map(({ label, value, href, icon: Icon }) => (
                        <Grid key={label} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                component={href ? "a" : "div"}
                                data-cursor-hover
                                className="hover-glow"
                                href={href}
                                target={href?.startsWith("http") ? "_blank" : undefined}
                                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                variant="outlined"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    p: 2.5,
                                    height: "100%",
                                    overflow: "visible",
                                    borderColor: "divider",
                                    backgroundColor: "surface.main",
                                    textDecoration: "none",
                                    color: "inherit",
                                    cursor: href ? "pointer" : "default",
                                    transition: "transform 150ms ease",
                                    "&:hover": href ? { transform: "translateY(-2px)" } : undefined,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 44,
                                        height: 44,
                                        borderRadius: "10px",
                                        backgroundColor: "hover.main",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon sx={{ fontSize: 22, color: "accent.main" }} />
                                </Box>
                                <Stack sx={{ minWidth: 0 }}>
                                    <Typography component="h3" variant="body2" sx={{ color: "text.secondary", fontWeight: 400 }}>
                                        {label}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 600 }} noWrap>
                                        {value}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
