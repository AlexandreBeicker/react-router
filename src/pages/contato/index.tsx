import { Link } from "react-router-dom"
export function Contato(){

    return(
        <div>
            <h1> Página de contato </h1>
            <h2> (xx) xxxxx-xxxx</h2>
            <Link to="/">Voltar a página home</Link>
            <Link to="/sobre">Ir para a página Sobre</Link>
        </div>
    )
}