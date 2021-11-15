// import React,{useState} from 'react'
import Navbar from './Navbar'
import './login.css';





// function Login(props) {

   
//         const values = [
//           {
//             email: "",
//             password: ""
//           }
//         ];
//     const {user,setUser}= useState(values)
//     return (
//         <>
//             <Navbar />
//             <div className="center-login">
//                 <form className="form-signin">
//                     <img className="mb-4" src="/logo192.png" alt="" width="72" height="72" />
//                     <h1 className="h3 mb-3 font-weight-normal">Login to Computer World</h1>
//                     <label for="inputEmail" className="sr-only">Email address</label>
//                     <input name="email" value={user.email} onChange={e=> setUser({email:e.target.value})} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
//                     <label for="inputPassword" className="sr-only">Password</label>
//                     <input type="password" id="inputPassword" name="password" value={user.password} onClick={e=> setUser({password:e.target.value})} className="form-control" placeholder="Password" required />
//                     <div className="checkbox mb-3">
//                         <label>
//                             <input type="checkbox" value="remember-me" /> Remember me
//                         </label>
//                     </div>
//                     <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
//                     <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Login


import React, {useState} from "react"
// import "./login.css"
import axios from "axios"
// import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    // const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/signIn", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            // history.push("/")
        })
    }

    return (

        <>
                    <Navbar />
                    <div className="center-login">
                        <form className="form-signin">
                            <img className="mb-4" src="/logo192.png" alt="" width="72" height="72" />
                            <h1 className="h3 mb-3 font-weight-normal">Login to Computer World</h1>
                            <input name="email" value={user.email} onChange={handleChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <input type="password" id="inputPassword" name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Password" required />
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={login}>Log in</button>
                            <button className="mx-2 btn btn-lg btn-primary btn-block" type="submit" >Register</button>
                            <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
                        </form>
                    </div>
                </>


        // <div className="login">
        //     <h1>Login</h1>
        //     <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        //     <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
        //     <div className="button" onClick={login}>Login</div>
        //     <div>or</div>
        //     <div className="button" onClick={() => history.push("/register")}>Register</div>
        // </div>
    )
}

export default Login