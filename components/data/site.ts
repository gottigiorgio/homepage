import {
    Email,
    Forum,
    Github,
    LanguageCsharp,
    LanguageJava,
    LanguageJavascript,
    LanguagePython,
    LanguageTypescript,
    Nodejs,
    Robot,
    Web,
    Database,
    Minecraft,
    BriefcaseOutline,
    Send,
    DotNet,
} from "mdi-material-ui"

export type Skill = {
    label: string
    icon: typeof Web
}

export type Project = {
    title: string
    description: string
    href: string
    tags: string[]
    icon?: typeof Web
    image?: string
}

export type Contact = {
    label: string
    value: string
    href?: string
    icon: typeof Web
}

export type Occupation = {
    role: string
    organization: string
    description: string
    href: string
    icon?: typeof Web
    image?: string
}

export type NavLink = {
    label: string
    href: string
}

export type Profile = {
    username: string
    role: string
    bio: string
    avatar: string
    githubUrl: string
}

// Costanti fuori dal componente: single source of truth, facili da riempire/estendere
export const profile: Profile = {
    username: "gottigiorgio",
    role: "Software Developer, System Administrator, Tecnico e Consulente IT",
    bio: "Ciao! Io sono gottigiorgio (mi raccomando, tutto minuscolo). Sono un'appassionato di Informatica e videogiochi, con esperienza di sviluppo sia in ambito web/frontend, con JavaScript e TypeScript (Next.js), sia in ambito server/backend, con Python, Java e C#.",
    avatar: "/pfp.png",
    githubUrl: "https://github.com/gottigiorgio",
}

export const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "Progetti", href: "#progetti" },
    { label: "Occupazioni", href: "#occupazioni" },
    { label: "Contatti", href: "#contatti" },
]

export const skills: Skill[] = [
    { label: "JavaScript", icon: LanguageJavascript },
    { label: "TypeScript", icon: LanguageTypescript },
    { label: "Python", icon: LanguagePython },
    { label: "Java", icon: LanguageJava },
    { label: "Node.js", icon: Nodejs },
    { label: "MongoDB / PostgreSQL", icon: Database},
    { label: "Discord.js", icon: Robot},    
    { label: "Next.js", icon: Web },
    { label: "Discord.py", icon: Robot},
    { label: "Minecraft", icon: Minecraft},
    { label: "C#", icon: LanguageCsharp },
    { label: ".Net Framework", icon: DotNet },
]

export const projects: Project[] = [
    {
        title: "Urban Boi",
        description:
            "Bot Discord per moderazione, utility ed esplorazione dell'Urban Dictionary, sviluppato e mantenuto interamente da me.",
        href: "https://urban.gottigiorgio.dev",
        image: "/urban-boi.png",
        tags: ["Discord Bot", "Discord.py", "Python"],
    },
    {
        title: "Gottigiorgio's Development Program",
        description:
            "Il GDP: un ecosistema collaborativo indipendente di sviluppo software, centrato su una community dove clienti, sviluppatori e appassionati si uniscono.",
        href: "https://discord.gottigiorgio.dev",
        image: "/gdp-icon.png",
        tags: ["Community", "Custom Software", "Infrastruttura"],
    },
]

export const occupations: Occupation[] = [
    {
        role: "Junior Software Developer",
        organization: "FBITech S.R.L.",
        description:
            "Software Developer in un'azienda specializzata in servizi IT di qualità per enti, aziende e pubbliche amministrazioni. Sviluppatori anche del [gestionale per PMI](https://geaz.it).",
        href: "https://fbitech.it",
        image: "https://fbitech.it/wp-content/uploads/elementor/thumbs/file-scaled-r699q3yjebmzjnrkwqq5yxmywq30mvf5v8esg9tdio.png",
    },
    {
        role: "Founder & Current Owner",
        organization: "gottigiorgio's Development Program (GDP)",
        description:
            "Fondatore e sviluppatore principale dell'ecosistema GDP: gestione tecnica, community e collaborazioni.",
        href: "https://urban.gottigiorgio.dev/gdp",
        image: "/gdp-icon.png",
    },
    {
        role: "Lounge's Dictator",
        organization: "gottigiorgio's Development Lounge",
        description:
            "Dittatore di una community discord, dedicata ai social del proprietario, al GDP ma sopratutto al supporto tra communty e membri.",
        href: "https://discord.gottigiorgio.dev",
        image: "/gdp-icon.png",
    },
    {
        role: "System Administrator",
        organization: "Delta ITA",
        description:
            "Gestore dell'infrastruttura tecnica in una community basata su Discord ed il mondo videoludico.",
        href: "https://discord.gg/d3U7PRKsJD",
        image: "/DeltaITA.png",
    },
    {
        role: "Direttore Tecnico",
        organization: "Lunaris: Beyond the Known World",
        description:
            "Gestore dell'infrastruttura tecnica in una community basata sul Roleplay e la connessione con la community.",
        href: "https://discord.gg/mN9aRqrmrj",
        image: "/Lunaris.png",
    },
]

export const contacts: Contact[] = [
    {
        label: "Email",
        value: "business@gottigiorgio.dev",
        href: "mailto:business@gottigiorgio.dev",
        icon: Email,
    },
    {
        label: "Discord",
        value: "@gottigiorgio",
        icon: Forum,
    },
    {
        label: "GitHub",
        value: "gottigiorgio",
        href: profile.githubUrl,
        icon: Github,
    },
    {
        label: "Telegram",
        value: "gottigiorgio",
        href: "https://t.me/gottigiorgio",
        icon: Send,
    },
]
