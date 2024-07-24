import { useEffect, useState} from "react"
import React  from 'react'

const MultipleReturn = () => {

    const [users, setUsers] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setErrors] = useState(null);

    useEffect(() => {
         async function fetchUsers(){
            try{
                 const response = await fetch('https://api.github.com/users');

                 const data = await response.json();
                 setUsers(data);
                 setIsLoading(false);
            }
            catch(error){
                setErrors(error);
                setIsLoading(false)
            }

            
         }

         fetchUsers();
    },[])

    if(isloading){
        return <p>...loading</p>;
    }

    if(error){
        return <p>Error: {error.message}</p>;
    }
  return (
    <div>
      <h1>Users List</h1>
      <ul>
  {
    users.map(user => {
        return <li key={user.id}>{user.login}</li>
    })
  }
      </ul>
    </div>
  )
}

export default MultipleReturn
