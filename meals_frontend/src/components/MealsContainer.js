import React from 'react';
import { Switch, Route } from 'react-router-dom'
import api from '../services/api'
import MealBrowser from './MealBrowser'
import Filter from './Filter'
import MealShow from './MealShow'
import MealNew from './MealNew'

export default class MealsContainer extends React.Component {
  constructor() {
    super()

    //The validMeals accounts for the Meal index not excluding the meals that the user has added.
    this.state = {
      meals : [],
      validMeals : [],
      searchTerm : '',
      filteredMeals : [],
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      api.meals.fetchMeals()
        .then(meals => this.setState({ meals }, () => this.filterUserMeals()))
    } else {
      this.props.history.push('/login')
    }
  }

  //I don't like the logic below for filtering meals. It seems inefficient
  filterUserMeals = () => {
      const validMeals = this.state.meals.filter(meal => !this.props.currentUser.meal_ids.includes(meal.id))
      this.setState({ validMeals : validMeals})
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => this.filteredMeals())
  }

  filteredMeals = () => {
    const term = this.state.searchTerm.toLowerCase()
    const filteredMeals = this.state.validMeals.filter(meal => meal.name.toLowerCase().includes(term) || meal.instructions.toLowerCase().includes(term))
    this.setState({ filteredMeals })
  }

  getMeals = () => {
    if (this.state.filteredMeals.length) {
      return this.state.filteredMeals
    } else if (this.state.validMeals.length) {
      return this.state.validMeals
    } else {
      return null
    }
  }

// I don't really like this logic below, but it works
  render() {
    console.log('In the meals container')
    return (
      <div className="meals-containter">
        <Switch>
          <Route
            path="/meals/new"
            component={MealNew}
            />
          <Route
            path="/meals/:id"
            render={ ({ match }) => {
              const meal = this.state.meals.find(meal => meal.id === parseInt(match.params.id))
              return (
                meal ? <MealShow  meal={meal}/> : '...loading in Meal Show'
              )
            }}
            />
          <Route
            path="/meals"
            render={ () => {
              return (
                <div>
                  <Filter
                    searchTerm={this.state.searchTerm}
                    handleChange={this.handleChange}
                    />
                  <br></br>
                  {this.state.searchTerm && !this.state.filteredMeals.length ? (
                    <h2>No Results</h2>
                    ) : (
                      <div className="meals-container">
                    {this.getMeals() ? (
                      <MealBrowser
                        meals={this.getMeals()}
                        handleAddMeal={this.props.handleAddMeal}
                        handleDeleteUserMeal={this.props.handleDeleteUserMeal}
                        />
                    )  : (
                      '...loading'
                    )}
                    </div>
                  )}
                </div>
                )
              }
            }
          />
        </Switch>
      </div>
    )
  }
}
