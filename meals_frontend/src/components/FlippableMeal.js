import React from 'react';
import { Link } from 'react-router-dom'
import MealCard from './MealCard'

export default class FlippableMeal extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isFlipped: false,
      isAdded: false
    }
  }

  handleFlip = () => {
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  handleAdd = () => {
    this.setState({ isAdded: !this.state.isAdded })
  }

  render() {
    return (
      <div className="ui eight wide column" >
        <MealCard
          meal={this.props.meal}
          currentUser={this.props.currentUser}
          handleAddMeal={this.props.handleAddMeal}
          isFlipped={this.state.isFlipped}
          handleFlip={this.handleFlip}
          isAdded={this.state.isAdded}
          handleAdd={this.handleAdd}
          />
      </div>
    )
  }
}
