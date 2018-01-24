import React from 'react';
import api from '../services/api'
import MealBrowser from './MealBrowser'

export default class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cookingGif: null
    }
  }

  componentDidMount() {
    api.gifs.fetchGif()
        .then(gifs => {
          const randomGif = gifs.data[Math.floor(Math.random() * gifs.data.length)]
          this.setState({ cookingGif : randomGif })
        })
  }

  render() {
    const { cookingGif } = this.state
    return (
      <div>
        <h1>TIME TO FUCKING COOK</h1>
        <div>
          {cookingGif ? <iframe src={cookingGif.embed_url} height={cookingGif.images["480w_still"].height} width={cookingGif.images["480w_still"].width} /> : '...loading GIF' }
        </div>
        <h1>Your Meals</h1>
        {this.props.currentUser.id ? <MealBrowser meals={this.props.currentUser.meals} currentUser={this.props.currentUser}/> : '...loading in Home'}
      </div>
    )
  }
}
