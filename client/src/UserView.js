import React from 'react'
import { gql } from "apollo-boost"
import { useQuery } from '@apollo/react-hooks'

const GET_USERS = gql`
    {
        users {
            lastName
            firstName
            email
            id
            courseResults {
                name
                score
            }
        }
    }
`

export const UserView = () => {
  const { loading, error, data } = useQuery(GET_USERS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  console.log({
    users: data.users[1]
  })

  return (
    <div>
       <h1 id='title'>Users Dynamic Table</h1>
       <table id='users'>
          <tbody>
          <th>Number</th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>

          {data.users.map((user, index) => {
       const { id, firstName, lastName, email, courseResults } = user 
       return (
          <tr key={id}>
            <td>{++index}</td>
             <td>{id}</td>
             <td>{firstName}</td>
             <td>{lastName}</td>
             <td>{email}</td>

          </tr>
       )
    }
    )}
          </tbody>
       </table>
    </div>
 )

  // ToDo: Display your users
  // Check the console log to make sure you're pulling your users in correctly.
  

 
}