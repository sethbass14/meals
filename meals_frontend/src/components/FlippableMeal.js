import React from 'react';
import { Link } from 'react-router-dom'
import MealCard from './MealCard'

export default class FlippableMeal extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isFlipped: false
    }
  }

  handleFlip = () => {
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  render() {
    return (
      <div className="ui eight wide column" >
        <MealCard
          isFlipped={this.state.isFlipped}
          handleFlip={this.handleFlip}
          meal={this.props.meal}
          currentUser={this.props.currentUser}
          />
      </div>
    )
  }
}
