import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'

export default function Home() {
    // const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
    const { data, isPending, error } = useFetch('https://my-json-server.typicode.com/NickGolitsyn/json-server-recipe-book/recipes')
    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Загрузка...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}