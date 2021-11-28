import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'

export default function Home() {
    // const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
    const { data, isPending, error } = useFetch('https://recipe-book-qidex93es-nickgolitsyn.vercel.app/recipes')
    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Загрузка...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}