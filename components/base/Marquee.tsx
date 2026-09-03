'use client'

import { Box, Typography } from "@mui/material"
import type { Skill } from "@/components/data/site"

export default function Marquee({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
    // Duplicato per uno scroll continuo senza salti (loop a -50%)
    const track = [...items, ...items]
    const duration = Math.max(items.length * 4.5, 18)

    return (
        <Box className="marquee">
            <Box
                className={reverse ? "marquee-track marquee-reverse" : "marquee-track"}
                sx={{ animationDuration: `${duration}s` }}
            >
                {track.map(({ label, icon: Icon }, index) => (
                    <Box
                        key={`${label}-${index}`}
                        className="marquee-item"
                        data-cursor-hover
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 0.75,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 56,
                                height: 56,
                                borderRadius: "14px",
                                border: "1px solid",
                                borderColor: "divider",
                                backgroundColor: "surface.main",
                            }}
                        >
                            <Icon sx={{ fontSize: 26, color: "accent.main" }} />
                        </Box>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "text.secondary",
                                fontWeight: 600,
                                width: 92,
                                textAlign: "center",
                                lineHeight: 1.25,
                            }}
                        >
                            {label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
