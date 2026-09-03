import { SvgIcon, SvgIconProps } from "@mui/material"
import type { SimpleIcon } from "simple-icons"

// Trasforma un'icona di Simple Icons in un componente con la stessa forma
// delle icone di mdi-material-ui (props sx/fontSize/color ecc. funzionanti allo
// stesso modo), cosi' si usa in modo intercambiabile ovunque nel sito.
export function createBrandIcon(icon: SimpleIcon) {
    function BrandIcon(props: SvgIconProps) {
        return (
            <SvgIcon viewBox="0 0 24 24" titleAccess={icon.title} {...props}>
                <path d={icon.path} />
            </SvgIcon>
        )
    }

    BrandIcon.displayName = `BrandIcon(${icon.slug})`
    return BrandIcon
}
