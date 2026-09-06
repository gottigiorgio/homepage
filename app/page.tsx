import { Box } from "@mui/material"
import Navbar from "@/components/base/Navbar"
import Footer from "@/components/base/Footer"
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

const personId = `${baseUrl}#person`

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
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

// ProfilePage e' il tipo che Google si aspetta per la pagina personale di una
// persona: dichiara esplicitamente che il soggetto della pagina e' la Person
// qui sopra, invece di lasciarlo dedurre dal testo.
const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${baseUrl}#webpage`,
    url: baseUrl,
    name: `${profile.username} | Software Developer`,
    description: profile.bio,
    inLanguage: "it-IT",
    mainEntity: { "@id": personId },
    isPartOf: { "@id": `${baseUrl}#website` },
}

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    url: baseUrl,
    name: profile.username,
    description: profile.bio,
    inLanguage: "it-IT",
    publisher: { "@id": personId },
}

export default function Home() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([personJsonLd, profilePageJsonLd, websiteJsonLd]).replace(/</g, "\\u003c"),
                }}
            />
            <Navbar />

            <a className="skip-link" href="#contenuto">
                Salta al contenuto
            </a>

            <Box component="main" id="contenuto" sx={{ flex: 1 }}>
                <Hero />
                <Occupations />
                <Projects />
                <Contact />
            </Box>

            <Footer />
        </Box>
    )
}
