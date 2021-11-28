import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const navigate = useNavigate()

    const { postData , data, error } = useFetch('http://localhost:3000/recipes', 'POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ title, ingredients, method, cookingTime: cookingTime + ' минут'})
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredient => [...prevIngredient, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }

    useEffect(() => {
        if (data) {
            navigate('/')
        }
    }, [data, navigate])

    return (
        <div className="create">
            <h2 className="page-title">Добавить новый рецепт</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Название:</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Добавить ингредиенты:</span>
                    <div className="ingredients">
                        <input 
                            type="text"
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className="btn">Добавить</button>
                    </div>
                </label>
                <p>Ингредиенты: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Способ приготовления:</span>
                    <textarea 
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Время готовки (минуты):</span>
                    <input 
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className="btn">Добавить</button>
            </form>
        </div>
    )
}