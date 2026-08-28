'use client'

import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { keyframes } from "@emotion/react"
import { ChevronDown, Github } from "mdi-material-ui"
import Image from "next/image"
import { profile, skills } from "@/components/data/site"

const pulseGlow = keyframes`
    0%, 100% {
        transform: translateX(-50%) scale(1);
        opacity: 0.22;
    }
    50% {
        transform: translateX(-50%) scale(1.18);
        opacity: 0.4;
    }
`

const pulseAvatar = keyframes`
    0%, 100% {
        box-shadow: 0 0 40px rgba(139, 92, 246, 0.35);
    }
    50% {
        box-shadow: 0 0 68px rgba(139, 92, 246, 0.6);
    }
`

export default function Hero() {
    return (
        <Box id="home" sx={{ position: "relative", overflow: "hidden" }}>
            {/* Glow di sfondo, pulsante */}
            <Box
                sx={{
                    position: "absolute",
                    top: -180,
                    left: "50%",
                    width: 640,
                    height: 640,
                    borderRadius: "50%",
                    background: "radial-gradient(closest-side, rgba(139,92,246,0.25), transparent)",
                    pointerEvents: "none",
                    animation: `${pulseGlow} 4.5s ease-in-out infinite`,
                }}
            />

            <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 10 } }}>
                <Stack sx={{ position: "relative", alignItems: "center", textAlign: "center", gap: 3 }}>
                    <Box
                        data-cursor-hover
                        sx={{
                            position: "relative",
                            width: { xs: 132, md: 160 },
                            height: { xs: 132, md: 160 },
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: "3px solid",
                            borderColor: "accent.main",
                            animation: `${pulseAvatar} 3.2s ease-in-out infinite`,
                        }}
                    >
                        <Image
                            src={profile.avatar}
                            alt={`Foto profilo di ${profile.username}`}
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </Box>

                    <Stack sx={{ gap: 0.5 }}>
                        <Typography
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: 34, md: 48 },
                                lineHeight: 1.1,
                                letterSpacing: -1,
                            }}
                        >
                            {profile.username}
                        </Typography>
                        <Typography
                            sx={{
                                color: "accent.main",
                                fontWeight: 600,
                                fontSize: { xs: 15, md: 17 },
                            }}
                        >
                            {profile.role}
                        </Typography>
                    </Stack>

                    <Typography sx={{ color: "text.secondary", maxWidth: 620, lineHeight: 1.7 }}>
                        {profile.bio}
                    </Typography>

                    {/* Skill grid: solo icone, il nome compare in hover */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(3, 1fr)",
                                sm: "repeat(4, 1fr)",
                                md: "repeat(6, 1fr)",
                            },
                            columnGap: 2,
                            rowGap: { xs: 5, md: 4 },
                            width: "100%",
                            maxWidth: 640,
                            "@media (hover: none)": {
                                "& .skill-label": {
                                    opacity: 1,
                                    whiteSpace: "normal",
                                    width: 92,
                                    textAlign: "center",
                                    lineHeight: 1.25,
                                },
                            },
                        }}
                    >
                        {skills.map(({ label, icon: Icon }) => (
                            <Box
                                key={label}
                                data-cursor-hover
                                className="hover-glow"
                                aria-label={label}
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    justifySelf: "center",
                                    width: 56,
                                    height: 56,
                                    borderRadius: "14px",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    backgroundColor: "surface.main",
                                    transition: "transform 150ms ease",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                    },
                                    "&:hover .skill-label": {
                                        opacity: 1,
                                        transform: "translate(-50%, 0)",
                                    },
                                }}
                            >
                                <Icon sx={{ fontSize: 26, color: "accent.main" }} />
                                <Typography
                                    className="skill-label"
                                    variant="caption"
                                    sx={{
                                        position: "absolute",
                                        top: "calc(100% + 10px)",
                                        left: "50%",
                                        whiteSpace: "nowrap",
                                        color: "text.secondary",
                                        fontWeight: 600,
                                        opacity: 0,
                                        transform: "translate(-50%, 4px)",
                                        transition: "opacity 180ms ease, transform 180ms ease",
                                        pointerEvents: "none",
                                    }}
                                >
                                    {label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Stack direction="row" sx={{ gap: 1.5, mt: 1, flexWrap: "wrap", justifyContent: "center" }}>
                        <Button
                            component="a"
                            href="#progetti"
                            size="large"
                            endIcon={<ChevronDown />}
                            className="hover-glow"
                            sx={{ overflow: "visible" }}
                        >
                            Vedi i progetti
                        </Button>
                        <Button
                            component="a"
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            size="large"
                            startIcon={<Github />}
                            className="hover-glow"
                            sx={{
                                overflow: "visible",
                                borderColor: "divider",
                                color: "text.primary",
                                "&:hover": { backgroundColor: "hover.main" },
                            }}
                        >
                            GitHub
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
