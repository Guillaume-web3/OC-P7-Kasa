import "./tag.css"

export default function Tag(props) {
    return (
        <div className="tag">
            <h1 className="tag__name">{props.tag}</h1>
        </div>
    )
}