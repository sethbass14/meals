import { API_KEY } from './api-key';
const GIFURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q='cooking'&limit=25`

const APP_API_ROOT = `http://localhost:3000/api/v1/`

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const fetchMeals = () => {
  return fetch(APP_API_ROOT + 'meals').then(resp => resp.json())
}

const fetchIngredients = () => {
  return fetch(APP_API_ROOT + 'ingredients')
    .then(resp => resp.json())
}

const fetchGif = () => {
  return fetch(GIFURL)
    .then(resp => resp.json())
}

export default {
  meals: {
    fetchMeals,
  },
  ingredients: {
    fetchIngredients
  },
  gifs: {
    fetchGif
  }
}
