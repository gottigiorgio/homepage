import type { Metadata } from "next"
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { ArrowLeft } from "mdi-material-ui"

export const metadata: Metadata = {
    title: "Pagina non trovata",
    robots: { index: false, follow: false },
}

export default function NotFound() {
    return (
        <Box
            component="main"
            sx={{
                position: "relative",
                overflow: "hidden",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                bgcolor: "background.default",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 720,
                    height: 720,
                    maxWidth: "140vw",
                    borderRadius: "50%",
                    background: "radial-gradient(closest-side, rgba(139,92,246,0.22), transparent)",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="sm">
                <Stack sx={{ position: "relative", alignItems: "center", textAlign: "center", gap: 2.5 }}>
                    <Typography
                        component="p"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: 96, md: 144 },
                            lineHeight: 1,
                            letterSpacing: -4,
                            background: "linear-gradient(180deg, #D8B4FE 0%, #8B5CF6 60%, #6D28D9 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        404
                    </Typography>

                    <Stack sx={{ gap: 1 }}>
                        <Typography component="h1" sx={{ fontWeight: 800, fontSize: { xs: 26, md: 32 }, letterSpacing: -0.5 }}>
                            Pagina non trovata
                        </Typography>
                        <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                            Questa pagina non esiste o è stata spostata.
                        </Typography>
                    </Stack>

                    <Button
                        href="/"
                        size="large"
                        startIcon={<ArrowLeft />}
                        className="hover-glow"
                        sx={{ overflow: "visible", mt: 1 }}
                    >
                        Torna alla home
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}
