import { useState,useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'

function Form() {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
    stayLogged:'',
  });

  //desconstructed to be more efficient and easy to use 
  const {email,password,stayLogged} = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isLoading,isError, isSuccess, message} = useSelector(
    (state) => state.auth
    
  )
 
  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/user')

    }
    dispatch (reset())

  },[user,isError, isSuccess, message,navigate,dispatch])

 //allows to make changes on form with react 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }) )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    const checked ={
      stayLogged,
    }
    dispatch(login(userData,checked))
  }

  if(isLoading){
    return "chargement"
  }
  
    return (
        <>

      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input name="email" type="text" id="username" value={email} onChange={onChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" id="password" value={password} onChange={onChange} />
          </div>
          <div className="input-remember">
            <input name="stayLogged" type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>

           <button className="sign-in-button" type="submit"  >Sign In</button> 
         
        </form>
      </section>
        </>
       
    );
}

export default Form;