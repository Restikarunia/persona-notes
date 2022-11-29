import React from "react";
import Proptypes from 'prop-types';
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";

function LoginPage({loginSuccess}){
    async function onLogin({email, password}){
        const {error, data} = await login({email, password});

        if(!error){
            loginSuccess(data);
        }
    }

    return(
        <section className="login-page">
            <h2>PLEASE SIGN-IN</h2>
            <LoginInput login={onLogin} />
            <p>Create An Account!<Link to="/register">REGISTER HERE</Link></p>
        </section>
    );

}

LoginPage.propTypes ={
    loginSuccess:Proptypes.func.isRequired,
}

export default LoginPage;