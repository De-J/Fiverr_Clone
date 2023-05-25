import { Link } from "react-router-dom";
import "./logo.scss";

function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <span>liverr</span>
                <span className="dot">.</span>
            </Link>
        </div>
    )
}

export default Logo;