import type { Metadata } from "next"
import React from "react"
import { MuiThemeProvider } from "./providers/ThemeProvider"
import { CssBaseline } from "@mui/material"
import CustomCursor from "@/components/base/CustomCursor"
import { profile } from "@/components/data/site"
import "./globals.css"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gottigiorgio.dev"
const title = `${profile.username} | Software Developer`
const description = profile.bio
const bannerUrl = new URL("/gdp-banner-sparse.png", baseUrl).toString()

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        profile.username,
        "software developer",
        "web developer",
        "system administrator",
        "consulente it",
        "gdp",
        "gottigiorgio's development program",
        "javascript",
        "typescript",
        "python",
        "java",
        "c#",
        "nodejs",
        "nextjs",
        "portfolio",
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
        canonical: baseUrl,
    },
    authors: [{ name: profile.username, url: baseUrl }],
    creator: profile.username,
    publisher: profile.username,
    category: "technology",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: profile.avatar,
        shortcut: profile.avatar,
        apple: profile.avatar,
    },
    openGraph: {
        title,
        description,
        url: baseUrl,
        siteName: profile.username,
        type: "website",
        locale: "it_IT",
        images: [
            {
                url: bannerUrl,
                width: 1923,
                height: 818,
                alt: `${profile.username} banner`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [bannerUrl],
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="it" style={{ scrollBehavior: "smooth" }}>
            <body>
                <MuiThemeProvider>
                    <CssBaseline />
                    <CustomCursor />
                    {children}
                </MuiThemeProvider>
            </body>
        </html>
    )
}
