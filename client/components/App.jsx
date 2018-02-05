
import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    request
      .get('/users')
      .then(res => {
        this.setState({
          users: res.body.users
        })
      })
  }

  render () {
    return (
      <div> <strong> Users </strong>
        {this.state.users.map((user) => {
          return (<li key={user.id}> {user.name} </li>)
        })}
      </div>
    )
  }
}

export default App
