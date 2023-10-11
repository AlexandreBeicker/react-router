import { Link } from 'react-router-dom'

export function Sobre () {
    return(
        <div>
            <h1>Bem vindo a página sobre</h1>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/produto">Produto</Link>
        </div>
    )
}