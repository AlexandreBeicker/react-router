import { Link } from "react-router-dom"
export function NotFound () {
    return(
        <div>
            <h1>404 NOT FOUND</h1>
            <Link to="/">Home</Link>
        </div>
    )
}