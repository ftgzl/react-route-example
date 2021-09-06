import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Users() {
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
            <Link to={`user/${user.id}`} >{user.name}
            </Link>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Users
