export default function Banner({ image, title, overlay = !!title, alt = "", className = "" }) {
    return (
        <div className={`banner ${className}`} role="img" aria-label={title || "Bannière"}>
            <img className="banner__img" src={image} alt={alt} />
            {overlay && <div className="banner__overlay" aria-hidden="true" />}
            {title && <h2 className="banner__title">{title}</h2>}
        </div>
    )
}
