import { Box, Container, Typography } from "@mui/material"
import Navbar from "@/components/base/Navbar"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Occupations from "@/components/sections/Occupations"
import Contact from "@/components/sections/Contact"
import { contacts, occupations, profile, projects, skills } from "@/components/data/site"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gottigiorgio.dev"

// sameAs: solo profili/contatti che rappresentano la stessa persona (non i datori di lavoro,
// che finiscono invece in worksFor)
const sameAs = contacts
    .map((contact) => contact.href)
    .filter((href): href is string => typeof href === "string" && !href.startsWith("mailto:"))

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.username,
    url: baseUrl,
    image: new URL(profile.avatar, baseUrl).toString(),
    jobTitle: profile.role,
    description: profile.bio,
    sameAs,
    knowsAbout: skills.map((skill) => skill.label),
    worksFor: occupations.map((occupation) => ({
        "@type": "Organization",
        name: occupation.organization,
        url: occupation.href !== "#" ? occupation.href : undefined,
    })),
    subjectOf: projects.map((project) => ({
        "@type": "SoftwareApplication",
        name: project.title,
        url: project.href,
        description: project.description,
    })),
}

export default function Home() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <Navbar />

            <Box component="main" sx={{ flex: 1 }}>
                <Hero />
                <Projects />
                <Occupations />
                <Contact />
            </Box>

            <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", py: 3 }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center" }}>
                        {new Date().getFullYear()} &copy; gottigiorgio, tutti i diritti riservati.
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}
