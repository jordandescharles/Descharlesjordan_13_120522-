import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset} from '../features/auth/authSlice'
import { rememberToken,getDatas} from '../features/auth/userSlice'
import Checkbox from "./Checkbox";


function Form() {

  //define Formdata State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  //allows to make changes on form with react 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    })) 
  }

  //desconstructed to be more efficient and easy to use 
  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // extract Data from from the storestate
  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  )

  // on SUBMIT dispatch datat to login
  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  // if OK then navigate to profil page else reset datas 
  useEffect(() => {
    if (isSuccess || user) {
      dispatch(rememberToken())
      dispatch(getDatas())
      navigate('/profil')
      
    }
    if (isError) {
      dispatch(reset())
    }
  })

  if (isLoading) {
    return <h1>Chargement</h1>
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
            <Checkbox id="remember-me" label=" Remember me" />
          </div>
          <button className="sign-in-button" type="submit" >Sign In</button>
        </form>
      </section>
    </>
  );
}

export default Form;