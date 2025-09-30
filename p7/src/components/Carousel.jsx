import { useState } from "react"
import chevron from "../assets/chevron.svg"

export default function Carousel({ pictures = [], alt = "" }) {
    const [i, setI] = useState(0)
    const n = pictures.length
    if (n === 0) return null

    const prev = () => setI((i - 1 + n) % n)
    const next = () => setI((i + 1) % n)

    return (
        <div className="carousel">
            <img className="carousel__img" src={pictures[i]} alt={alt} loading="eager" />
            {n > 1 && (
                <>
                    <button type="button" className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Image précédente">
                        <img className="carousel__icon" src={chevron} alt="" aria-hidden="true" />
                    </button>
                    <button type="button" className="carousel__btn carousel__btn--next" onClick={next} aria-label="Image suivante">
                        <img className="carousel__icon" src={chevron} alt="" aria-hidden="true" />
                    </button>
                    <div className="carousel__counter">{i + 1}/{n}</div>
                </>
            )}
        </div>
    )
}
