'use client'

import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { keyframes } from "@emotion/react"
import { ChevronDown, Github } from "mdi-material-ui"
import Image from "next/image"
import Marquee from "@/components/base/Marquee"
import { profile, skills } from "@/components/data/site"

const skillsRowOne = skills.filter((skill) => skill.row === 1)
const skillsRowTwo = skills.filter((skill) => skill.row === 2)

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

const pulseMarquee = keyframes`
    0%, 100% {
        box-shadow: 0 0 40px rgba(139, 92, 246, 0.07);
    }
    50% {
        box-shadow: 0 0 70px rgba(139, 92, 246, 0.16);
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

            <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 14 } }}>
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
                            component="h1"
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
                            component="p"
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
                </Stack>
            </Container>
            
            <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 8, marginTop: "2.5em" } }}>
                <Stack direction="row" sx={{ gap: 1.5, flexWrap: "wrap", justifyContent: "center" }}>
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
            </Container>

            <Box
                sx={{
                    width: "100%",
                    my: { xs: 5, md: 6 },
                    animation: `${pulseMarquee} 4s ease-in-out infinite`,
                }}
            >
                <Stack sx={{ width: "100%", gap: 1.5 }}>
                    <Marquee items={skillsRowOne} />
                    <Marquee items={skillsRowTwo} reverse />
                </Stack>
            </Box>
        </Box>
    )
}
