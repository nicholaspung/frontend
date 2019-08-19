import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    users: [],
    devURL: 'http://localhost:5000'
  }

  async componentDidMount() {
    const { devURL } = this.state
    try {
      const { data } = await axios.get(`${devURL}/users`)
      this.setState({ users: data })
    } catch (err) {
      console.error({ message: err.message })
    }
  }

  render() {
    const { users } = this.state
    return (
      <div className="testRun">
        <h1>Testing Frontend/Server/Database connection...</h1>
        {users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
