import { Link } from 'react-router-dom'
import './Navbar.css'
import SeacrhBar from './SearchBar'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="brand">
                    <h1>Книга Рецептов</h1>
                </Link>
                <SeacrhBar />
                <Link to="/create">Добавить Рецепт</Link>
            </nav>
        </div>
    )
}