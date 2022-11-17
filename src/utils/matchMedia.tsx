import { useEffect, useState } from "react"

export const useMatchMedia = (px: number) => {

    const [mobile, setMobile] = useState(false)

    const matches = (x: MediaQueryList | MediaQueryListEvent) => {
        if (x.matches) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    useEffect(() => {
        const x = window.matchMedia(`(max-width: ${px}px)`)
        matches(x)
        x.addListener(matches)
    }, [])

    return mobile
}
