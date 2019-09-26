import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (data) => {
    // map over your movieData array and return the correct 
    return data.map((data, idx) => <MovieCard key={idx} {...data} />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
