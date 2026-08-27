import type { MetadataRoute } from "next"
import { profile } from "@/components/data/site"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${profile.username} - ${profile.role}`,
        short_name: profile.username,
        description: profile.bio,
        start_url: "/",
        display: "standalone",
        background_color: "#09090C",
        theme_color: "#8B5CF6",
        icons: [
            {
                src: profile.avatar,
                sizes: "256x256",
                type: "image/png",
            },
        ],
    }
}
