import React, { Component } from 'react'

class UserList extends Component {
  render() {
    const { arrUsersWhoLikedMovie, objUsers } = this.props

    if (!arrUsersWhoLikedMovie || arrUsersWhoLikedMovie.length === 0) {
      return <p>None of the current users liked this movie.</p>
    }

    const listofUsers = arrUsersWhoLikedMovie.map((id) => (
      <li key={id}>
        <p>{objUsers[id].name}</p>
      </li>
    ))

    return <ul>{listofUsers}</ul>
  }
}

export default UserList
