'use client'

import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material"
import { BriefcaseOutline } from "mdi-material-ui"
import Image from "next/image"
import { occupations } from "@/components/data/site"
import RichText from "@/components/base/RichText"

export default function Occupations() {
    return (
        <Box id="occupazioni" sx={{ py: { xs: 8, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack sx={{ alignItems: "center", textAlign: "center", gap: 1, mb: 5 }}>
                    <Typography component="h2" variant="h4" sx={{ fontWeight: 800 }}>
                        Occupazioni
                    </Typography>
                    <Typography sx={{ color: "text.secondary", maxWidth: 520 }}>
                        I ruoli che ricopro tra progetti, community e organizzazioni.
                    </Typography>
                </Stack>

                <Grid container spacing={2.5}>
                    {occupations.map((occupation, index) => {
                        const Icon = occupation.icon ?? BriefcaseOutline
                        const isExternal = occupation.href.startsWith("http")
                        return (
                            <Grid key={`${index}-${occupation.role}-${occupation.organization}`} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Card
                                    variant="outlined"
                                    data-cursor-hover
                                    className="hover-glow"
                                    sx={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        gap: 1,
                                        p: 3,
                                        height: "100%",
                                        overflow: "visible",
                                        borderColor: "divider",
                                        backgroundColor: "surface.main",
                                        transition: "transform 150ms ease",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    <Box
                                        component="a"
                                        href={occupation.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        aria-label={`Vai a ${occupation.organization}`}
                                        sx={{ position: "absolute", inset: 0, borderRadius: "inherit" }}
                                    />

                                    <Box
                                        sx={{
                                            position: "relative",
                                            zIndex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: 1,
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "relative",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 56,
                                                height: 56,
                                                borderRadius: "14px",
                                                overflow: "hidden",
                                                backgroundColor: "hover.main",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {occupation.image ? (
                                                <Image
                                                    src={occupation.image}
                                                    alt={`Logo di ${occupation.organization}`}
                                                    fill
                                                    sizes="56px"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            ) : (
                                                <Icon sx={{ fontSize: 26, color: "accent.main" }} />
                                            )}
                                        </Box>

                                        <Typography sx={{ color: "accent.main", fontWeight: 600 }}>
                                            {occupation.role}
                                        </Typography>

                                        <Typography component="h3" variant="body2" sx={{ fontWeight: 700, mt: 1 }}>
                                            {occupation.organization}
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: "text.secondary", pointerEvents: "auto" }}>
                                            <RichText text={occupation.description} />
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}
