'use client'

import { Box, Card, Chip, Container, Stack, Typography } from "@mui/material"
import { CodeBraces, OpenInNew } from "mdi-material-ui"
import Image from "next/image"
import { projects } from "@/components/data/site"

// Colonne desktop in base al numero di progetti: 1 centrato, 2 affiancati,
// 3 occupano tutta la riga, 4+ vanno a griglia 3 per riga
const desktopColumns = (count: number) => {
    if (count === 1) return 1
    if (count === 2) return 2
    if (count === 3) return 3
    if (count === 4) return 2
    return 3
}

export default function Projects() {
    const columns = desktopColumns(projects.length)
    const isSingle = projects.length === 1

    return (
        <Box id="progetti" sx={{ py: { xs: 8, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack sx={{ alignItems: "center", textAlign: "center", gap: 1, mb: 5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Progetti
                    </Typography>
                    <Typography sx={{ color: "text.secondary", maxWidth: 520 }}>
                        Alcune delle cose che ho costruito, tra bot, community e software su misura.
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: isSingle ? "1fr" : "repeat(2, 1fr)",
                            md: `repeat(${columns}, 1fr)`,
                        },
                        gap: 2.5,
                    }}
                >
                    {projects.map((project) => {
                        const Icon = project.icon ?? CodeBraces
                        return (
                            <Card
                                key={project.title}
                                component="a"
                                href={project.href}
                                target={project.href.startsWith("http") ? "_blank" : undefined}
                                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                variant="outlined"
                                className="hover-glow"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1.5,
                                    p: 2.5,
                                    height: "100%",
                                    width: "100%",
                                    maxWidth: isSingle ? 420 : "none",
                                    justifySelf: isSingle ? "center" : "stretch",
                                    overflow: "visible",
                                    borderColor: "divider",
                                    backgroundColor: "surface.main",
                                    textDecoration: "none",
                                    color: "inherit",
                                    transition: "transform 150ms ease",
                                    "&:hover": {
                                        transform: "translateY(-3px)",
                                    },
                                }}
                            >
                                <Stack direction="row" sx={{ alignItems: "center", gap: 1.5 }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 44,
                                            height: 44,
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            backgroundColor: "hover.main",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {project.image ? (
                                            <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
                                        ) : (
                                            <Icon sx={{ fontSize: 24, color: "accent.main" }} />
                                        )}
                                    </Box>
                                    <Typography sx={{ fontWeight: 700, flexGrow: 1 }}>
                                        {project.title}
                                    </Typography>
                                    <OpenInNew sx={{ fontSize: 18, color: "text.secondary" }} />
                                </Stack>

                                <Typography variant="body2" sx={{ color: "text.secondary", flexGrow: 1 }}>
                                    {project.description}
                                </Typography>

                                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75 }}>
                                    {project.tags.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            data-cursor-hover
                                            className="hover-glow"
                                            sx={{
                                                overflow: "visible",
                                                backgroundColor: "hover.main",
                                                color: "text.secondary",
                                                border: "1px solid transparent",
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Card>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}
