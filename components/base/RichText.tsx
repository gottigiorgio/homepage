import { Link } from "@mui/material"
import { Fragment } from "react"

// Riconosce due sintassi dentro il testo:
// - link con testo custom: [testo](https://esempio.it)
// - url nudo: https://esempio.it (diventa un link cliccabile automaticamente)
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s)]+)/g

export default function RichText({ text }: { text: string }) {
    const nodes: React.ReactNode[] = []
    let lastIndex = 0
    let key = 0
    let match: RegExpExecArray | null

    LINK_PATTERN.lastIndex = 0
    while ((match = LINK_PATTERN.exec(text)) !== null) {
        if (match.index > lastIndex) {
            nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>)
        }

        const label = match[1] ?? match[3]
        const url = match[2] ?? match[3]

        nodes.push(
            <Link
                key={key++}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                onClick={(e) => e.stopPropagation()}
                sx={{ color: "accent.main", fontWeight: 600 }}
            >
                {label}
            </Link>
        )

        lastIndex = LINK_PATTERN.lastIndex
    }

    if (lastIndex < text.length) {
        nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>)
    }

    return <>{nodes}</>
}
