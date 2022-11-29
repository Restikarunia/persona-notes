import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";


function RegisterPage(){
    const navigate = useNavigate();

    async function onRegisterHandler(user){
        const {error} = await register(user);
        if (!error){
            navigate("/");
        }
    }

    return(
        <section className="register-app">
            <h2>REGISTER HERE!!!</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>HAVE ACCOUNT? <Link to="/">SIGN IN</Link></p>
        </section>
    )

}

export default RegisterPage;