import { useState, useEffect } from 'react'
<<<<<<< HEAD
import {NavLink, Switch, Route, useRouteMatch} from 'react-router-dom'
import axios from 'axios'

import User from '../User/User'
import "./styles.css"

function Users() {
  const {url, path} = useRouteMatch()
=======
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import axios from 'axios'

import User from "../User/User";

function Users() {
  const {path, url} = useRouteMatch();
>>>>>>> fe160643b5c56b94ee3c043477f31d0aa4ec1a0e
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
<<<<<<< HEAD
            <NavLink 
              activeClassName="active-user" to={`${url}/${user.id}`} >{user.name}
            </NavLink>
          </li>)
        }
=======
            <Link to={`${url}/${user.id}`} >{user.name}
            </Link>
          </li>)
        }

>>>>>>> fe160643b5c56b94ee3c043477f31d0aa4ec1a0e
        <Switch>
          <Route exact path={path}>
            <h3>Please select a user.</h3>
          </Route>
          <Route 
            path={`${path}/:id`} component={User} 
          />
        </Switch>
<<<<<<< HEAD
=======

>>>>>>> fe160643b5c56b94ee3c043477f31d0aa4ec1a0e
      </ul>
    </div>
  )
}

export default Users
