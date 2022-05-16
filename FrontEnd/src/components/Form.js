import { useRef,useState,useEffect} from "react";




function Form() {
  const userRef = useRef();
  const errRef = useRef(); // for accessibility if error

  const [user, setUser] = useState('');
  const [validName, setValidName]  = useState(false);
  const [userFocus, setUserFocus]  = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd]  = useState(false);
  const [pwdFocus, setPwdFocus]  = useState(false);
  
    return (
        <>

      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>

           <button className="sign-in-button">Sign In</button> 
         
        </form>
      </section>
        </>
       
    );
}

export default Form;