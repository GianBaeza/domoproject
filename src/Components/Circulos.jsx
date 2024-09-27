
export default function Circulos({ title, style, color, styleTitle }) {
    return (
        <div className={`${style}${color}`}>
            <h2 className={styleTitle}>{title}</h2>
        </div>
    )
}
