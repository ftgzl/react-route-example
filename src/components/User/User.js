import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const {id} = useParams()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
      <h2>User Detail</h2>
      {loading && <div>Loading...</div>}
      {
        !loading &&
        <div>
          <p>Name : {user.name}</p>
          <p>User Name : {user.username}</p>
          <p>Phone : {user.phone}</p>
          <p>Email : {user.email}</p>
          <p>City : {user.address.city}</p>
        </div>
      }
    </div>
  )
}

export default User
