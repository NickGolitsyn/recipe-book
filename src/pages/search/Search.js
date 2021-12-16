import RecipeList from '../../components/RecipeList'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Search.css'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    // const url = 'http://localhost:3000/recipes?q=' + query
    const url = 'https://my-json-server.typicode.com/NickGolitsyn/json-server-recipe-book/recipes' + query
    const {error, isPending, data} = useFetch(url)

    return (
        <div>
            <h2 className="page-title">Рецепты с "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Загрузка...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}