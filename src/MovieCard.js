import React, { Component } from 'react'
import UserList from './UserList'

class MovieCard extends Component {
  render() {
    const { arrUsersWhoLikedMovie, objUsers, objMovie } = this.props
    return (
      <li key={objMovie.id}>
        <h2>{objMovie.name}</h2>
        <h3>Liked By:</h3>
        <UserList
          arrUsersWhoLikedMovie={arrUsersWhoLikedMovie}
          objUsers={objUsers}
        />
      </li>
    )
  }
}

export default MovieCard
