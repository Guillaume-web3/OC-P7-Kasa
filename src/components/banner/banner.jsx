import "./banner.css"

export default function Banner(props) {
 return (
    <div className= {`banner banner__${props.className}`}>
        <h1 className="slogan">{props.slogan}</h1>
    </div>
 )
}