import { useState, useEffect } from 'react'
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import axios from 'axios'

import User from "../User/User";

function Users() {
  const {path, url} = useRouteMatch();
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
      {loading && <div>Loading...</div>}
        {
          !loading &&
          users.map((user) => <li key={user.id}>
            <Link to={`${url}/${user.id}`} >{user.name}
            </Link>
          </li>)
        }

        <Switch>
          <Route exact path={path}>
            <h3>Please select a user.</h3>
          </Route>
          <Route 
            path={`${path}/:id`} component={User} 
          />
        </Switch>

      </ul>
    </div>
  )
}

export default Users
