import React, { useState, useEffect } from "react";


const Login = ({title,angka}) => {

    const [welcomeText, setWelcomeText] = useState("Welcome!!!");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    useEffect(() => {
       console.log("component did mount")
    }, [])

    useEffect(() => {
        console.log("Component did update")
    }, [welcomeText])

    const handleSubmit = () => {
        setWelcomeText("Selamat Datang");
        const data = {
            email: email,
            password: password,
        };
        console.log(data);
    };

    return (
        //JSX
        <div>
            <h3>{welcomeText}</h3>
            <h5>
                {title} {angka}
            </h5>
            <p>Email</p>
            <input placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p>Password</p>
            <input placeholder="Masukkan Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button type="button" onClick={handleSubmit}>Sign In</button>
        </div> 
    )
}

export default Login;

