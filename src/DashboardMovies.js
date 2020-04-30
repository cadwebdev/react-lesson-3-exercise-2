import React, { Component } from 'react'
import MovieCard from './MovieCard'

class DashboardMovies extends Component {
  render() {
    const { objUsersByMovie, objUsers, objMovies } = this.props

    const movieCards = Object.keys(objMovies).map((id) => (
      <MovieCard
        arrUsersWhoLikedMovie={objUsersByMovie[id]}
        objUsers={objUsers}
        objMovie={objMovies[id]}
      />
    ))
    return (
      <ul>
        <h2>How Popular is Your Favorite Movie?</h2>
        {movieCards}
      </ul>
    )
  }
}

export default DashboardMovies
