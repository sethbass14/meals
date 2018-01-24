import { API_KEY } from './api-key';
const GIFURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q='cooking'&limit=25`

const APP_API_ROOT = `http://localhost:3000/api/v1/`
const token = localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json',
  'Authorization': token
}

const login = (user_data) => {
  return fetch(`${APP_API_ROOT}/auth/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user_data)
  }).then(resp => resp.json());
}

const getCurrentUser = () => {
  return fetch(`${APP_API_ROOT}/current_user/`, {
    headers
  }).then(resp => resp.json())
}

const postNewUser = (user_data) => {
  return fetch(`${APP_API_ROOT}/users/`, {
    headers,
    method: 'POST',
    body: JSON.stringify(user_data)
  }).then(resp => resp.json())
}

const postNewUserMeal = (data) => {
  return fetch(`${APP_API_ROOT}/user_meals/`, {
    headers,
    method: 'POST',
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

const fetchMeals = () => {
  return fetch(`${APP_API_ROOT}/meals/`).then(resp => resp.json())
}

const fetchIngredients = () => {
  return fetch(`${APP_API_ROOT}/ingredients/`)
    .then(resp => resp.json())
}

const fetchGif = () => {
  return fetch(GIFURL)
    .then(resp => resp.json())
}

export default {
  auth: {
    login,
    getCurrentUser
  },
  users: {
    postNewUser,
    postNewUserMeal
  },
  meals: {
    fetchMeals
  },
  ingredients: {
    fetchIngredients
  },
  gifs: {
    fetchGif
  }
}
