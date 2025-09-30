import { useId, useState } from "react"
import chevron from "../assets/chevron.svg"

export default function Collapse({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen)
    const panelId = useId()
    const labelId = `${panelId}-label`

    return (
        <div className={`collapse${open ? " is-open" : ""}`}>
            <button
                type="button"
                className="collapse__toggle"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen(o => !o)}
            >
                <span id={labelId} className="collapse__title">{title}</span>
                <img className="collapse__icon" src={chevron} alt="" aria-hidden="true" />
            </button>

            <div id={panelId} className="collapse__panel" role="region" aria-labelledby={labelId}>
                <div className="collapse__content">{children}</div>
            </div>
        </div>
    )
}
