
import { useEffect, useState } from 'react'

const useFetch = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetch('http://api.github.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error))
    },[])
  return [users];
}

export default useFetch
