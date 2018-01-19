import React from 'react';
import MealCard from './MealCard'

export default class FlippableMeal extends React.Component {
  constructor(){
    super()

    this.state = {
      isFlipped: false
    }
  }

  handleFlip = () => {
    this.setState({ isFlipped: !this.state.isFlipped }, () => console.log('In handle flip', this.state))
  }

  render() {
    return (
      <div className="ui eight wide column">
        {!this.state.isFlipped? < MealCard.MealCard meal={this.props.meal} handleFlip={this.handleFlip} /> : < MealCard.FlippedMealCard meal={this.props.meal} handleFlip={this.handleFlip} />}
      </div>
    )
  }
}
