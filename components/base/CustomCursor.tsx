'use client'

import { useEffect, useRef } from "react"

const HOVER_SELECTOR = "a, button, [data-cursor-hover]"

export default function CustomCursor() {
    const glowRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)
    const dotRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return

        const glow = glowRef.current
        const ring = ringRef.current
        const dot = dotRef.current
        if (!glow || !ring || !dot) return

        document.body.classList.add("custom-cursor-active")

        const elements = [glow, ring, dot]
        let placed = false

        const applyTransform = (x: number, y: number) => {
            const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
            glow.style.transform = transform
            ring.style.transform = transform
            dot.style.transform = transform
        }

        const move = (e: MouseEvent) => {
            if (!placed) {
                placed = true
                // Prima posizione: nessuna transizione, comparsa istantanea sotto il mouse
                elements.forEach((el) => { el.style.transition = "none" })
                applyTransform(e.clientX, e.clientY)
                elements.forEach((el) => { el.classList.add("cursor-visible") })
                void ring.offsetWidth
                requestAnimationFrame(() => {
                    elements.forEach((el) => { el.style.transition = "" })
                })
                return
            }
            applyTransform(e.clientX, e.clientY)
        }

        const setHover = (hovering: boolean) => {
            glow.classList.toggle("cursor-hover", hovering)
            ring.classList.toggle("cursor-hover", hovering)
            dot.classList.toggle("cursor-hover", hovering)
        }

        const over = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(HOVER_SELECTOR)) setHover(true)
        }

        const out = (e: MouseEvent) => {
            const related = e.relatedTarget as HTMLElement | null
            if ((e.target as HTMLElement).closest(HOVER_SELECTOR) && !related?.closest(HOVER_SELECTOR)) {
                setHover(false)
            }
        }

        const down = () => ring.classList.add("cursor-active")
        const up = () => ring.classList.remove("cursor-active")

        window.addEventListener("mousemove", move)
        document.addEventListener("mouseover", over)
        document.addEventListener("mouseout", out)
        window.addEventListener("mousedown", down)
        window.addEventListener("mouseup", up)

        return () => {
            document.body.classList.remove("custom-cursor-active")
            window.removeEventListener("mousemove", move)
            document.removeEventListener("mouseover", over)
            document.removeEventListener("mouseout", out)
            window.removeEventListener("mousedown", down)
            window.removeEventListener("mouseup", up)
        }
    }, [])

    return (
        <>
            <div ref={glowRef} className="cursor-glow" />
            <div ref={ringRef} className="cursor-ring" />
            <div ref={dotRef} className="cursor-dot" />
        </>
    )
}
