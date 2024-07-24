import React from 'react'
// import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './form.css'





const FormVal = () => {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    
  } = useForm()

  const password = watch('password')


  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [age, setAge] = useState('');
  // const [gender, setGender] = useState('');
  // const [errors, setErrors] = useState('');


  // function validateForm() {

  //   const errors = {};
  //   if (!name) {
  //     errors.name = 'Name is required'
  //   }
  //   if (!email) {
  //     errors.email = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = "Email is invalid"
  //   }

  //   if (!password) {
  //     errors.password = 'Password is required'
  //   } else if (password.length < 6) {
  //     errors.password = 'Password must be 6 character'
  //   }

  //   if (!confirmPassword) {
  //     errors.confirmPassword = 'Confirm Password is required'
  //   } else if (password !== confirmPassword) {
  //     errors.confirmPassword = 'Password does not match'
  //   }

  //   if (!age) {
  //     errors.age = 'Age is required'
  //   } else if (isNaN(age) || (age < 18)) {
  //     errors.age = 'Age nust be a number and atleast 18'
  //   }

  //   if (!gender) {
  //     errors.gender = 'Gender is required'
  //   }

  //   console.log(errors)
  //   return errors;

  // }

  // const HandleSubmit = (e) => {
  //   e.preventDefault();

  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors)
  //   } else {
  //     console.log('Form Submitted')
  //   }


  // }


  const onSubmit = data => console.log(data) 


  return (
    <div className='container'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Name:</label>
          <input type="text" name='name' {
            ...register('name',{required:'Name is required'})
          }/>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" {
            ...register('email',{
              required:'Email is Required',
              pattern:{value:/\S+@\S+\.\S+/},
              message:"Invalid Email"

            })}/>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="Password" name='password'{
            ...register('password',{
              required:'Password is required',
            minLength:{value:6,
              message:'Password must be 6 character long'
            },
            })
          }/>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="Password" name="confirmPassword" {
            ...register('confirmPassword',{
              required: 'Confirm Password is required',
              validate: value => value === password || 'password donot match'
            })}/>
          {errors.confirmPassword && errors.confirmPassword.message}
        </div>
        <div>
          <label>Age</label>
          <input type="text" name="Age"/>
          {errors.age}
        </div>
        <div>
          <label>Gender</label>
          <select name="gender">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">FeMale</option>
            <option value="transgender">Transgender</option>
          </select>
          {errors.gender}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>

      </form>
    </div >

  )
}

export default FormVal
