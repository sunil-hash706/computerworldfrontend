
// import React, { useState } from 'react'
import Navbar from './Navbar'

// function Signup() {

//     const { user, setUser } = useState({
//         name: "",
//         email: "",
//         password: "",
//         conformPassward: ""
//     })

//     return (
//         <>
//             <Navbar />
//             <div className="center-login">
//                 <form className="form-signin">
//                     <img className="mb-4" src="/logo192.png" alt="" width="72" height="72" />
//                     <h1 className="h3 mb-3 font-weight-normal">Signup to Computer World</h1>

//                     <label for="inputName" className="sr-only">Your Name</label>
//                     <input name="name" value={user.name} onChange={e=> setUser({name:e.target.value})} type="name" className="form-control" placeholder="Email address" required autofocus />

//                     <label for="inputEmail" className="sr-only">Email address</label>
//                     <input name="email" value={user.email} onChange={e=> setUser({email:e.target.value})} type="email" className="form-control" placeholder="Email address" required autofocus />

//                     <label for="inputPassword" className="sr-only">Password</label>
//                     <input name="password" value={user.password} onChange={e=> setUser({password:e.target.value})} type="password" className="form-control" placeholder="Password" required />


//                     <label for="inputConformPassword" className="sr-only">Comform Password</label>
//                     <input name="conformPassword" value={user.conformPassword} onChange={e=> setUser({conformPassward:e.target.value})} type="password" className="form-control" placeholder="Password" required />

//                     <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
//                     <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
//                 </form>
//             </div>
//         </>

//     )
// }

// export default Signup




import React, { useState } from "react"
// import "./register.css"
import axios from "axios"
// import { useHistory } from "react-router-dom"

const Register = () => {

    // const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/signUp", user)
            .then( res => {
                alert("hiii")
                // history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        // <div className="register">
        //     {console.log("User", user)}
        //     <h1>Register</h1>
        //     <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
        //     <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
        //     <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
        //     <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
        //     <div className="button" onClick={register} >Register</div>
        //     <div>or</div>
        //     <div className="button" onClick={() => history.push("/login")}>Login</div>
        // </div>


        <>
                <Navbar />
                <div className="center-login">
                    <form className="form-signin">
                        <img className="mb-4" src="/logo192.png" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Signup to Computer World</h1>
        
                        <input name="name" value={user.name} onChange={ handleChange } type="name" className="form-control" placeholder="User Name" required autofocus />
        
                        <input name="email" value={user.email} onChange={ handleChange } type="email" className="form-control" placeholder="Email address" required autofocus />
        
                        <input name="password" value={user.password} onChange={ handleChange } type="password" className="form-control" placeholder="Password" required />
        
        
                        <input name="reEnterPassword" value={user.reEnterPassword} onChange={ handleChange } type="password" className="form-control" placeholder="Re-enter Password" required />
        
                        <button className="btn btn-lg btn-primary btn-block" onClick={register} type="submit">Sign up</button>
                        <button className=" mx-2 btn btn-lg btn-primary btn-block"  type="submit">Sign up</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
                    </form>
                </div>
            </>
    )
}

export default Register