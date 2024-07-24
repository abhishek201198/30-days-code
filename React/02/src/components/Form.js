import React,{useState}from 'react'




function Form() {

    // const[name, setName] = useState("");
    // const [email,setEmail]  = useState("");
    // const [password, setPassword] = useState('');

    //  Multiple Use Of UseStates
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:""
    })

    // const handleName = (e) => {
    //     setName(e.target.value)
    //     console.log(e.target.value)
    //  }

    //  const handleEmail = (e)=> {
    //     setEmail(e.target.value)
    //  }

    //  const handlePassword = (e)=>{
    //      setPassword(e.target.value)
    //  }

    const handleInput = (e) =>{
        const {name, value} =  e.target;
         console.log(e.target.value);

         setFormData({...formData,[name]:value
         })

    }

     const handleSubmit = (e) => {
       e.preventDefault();
     }
  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text"  name="name" value={formData.name} onChange={handleInput}/>

      </label>
      <label>
      Email:
        <input type="email" name="email" value={formData.email} onChange={handleInput}/>
     
      </label>
      <label>
      Password:
        <input type="password" name="password" value={formData.password} onChange={handleInput}/>
     
      </label>

      <button type="submit">Submit</button>
      
    </form>
  )
}

export default Form
