import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export function Produto (){
    const{ id } = useParams();
    return(
        <div>
            <h1>Bem vindo ao produto {id}</h1>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}