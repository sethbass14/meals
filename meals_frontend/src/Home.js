import React from 'react';
import { API_KEY } from './api-key';
const GIFURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q='cooking'&limit=25`


export default class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      cookingGif: null
    }
  }

  //This code is not functioning. Take a look and figure it out.
  componentDidMount() {
    fetch(GIFURL)
      .then(resp => resp.json())
        .then(gifs => {
          const randomGif = gifs.data[Math.floor(Math.random() * gifs.data.length)]
          this.setState({ cookingGif : randomGif }, () => console.log(this.state))
        })
  }

  render() {
    const { cookingGif } = this.state
    return (
      <div>
        <h1>TIME TO FUCKING COOK</h1>
        <div>
          {cookingGif ? <iframe src={cookingGif.embed_url} height={cookingGif.images["480w_still"].height} width={cookingGif.images["480w_still"].width} /> : '...loading' }
        </div>
      </div>
    )
  }
}
