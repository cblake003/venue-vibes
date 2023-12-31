import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);

    return(
        <main className="AuthPage">
            <h1>Sign Up or Login for your Venue Vibes <img className="logo" src={"img/Venue-Vibes-logo.png"}></img></h1>
            <button onClick={() => setShowSignUp(!showSignUp)}> {showSignUp ? 'Log In' : 'Sign Up'}</button>
            {showSignUp ?
            <SignUpForm setUser={ setUser } />
            :
            <LoginForm setUser={ setUser } />
            }
        </main>
    );
}