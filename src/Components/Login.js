import React from 'react'
import "../Login.css"
const Login = () => {
  return (
    <main className="form-signin">
        <form action="/dashboard" >
            <div className='image'>
                <img className="mb-4" src="/images/Gujarat-Police-Logo.png" alt="" width="130"/>
            </div>
      
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
           
            <button className="w-100 btn btn-lg btn-secondary" type="submit">Sign in</button>
            
        </form>
    </main>
  )
}

export default Login;