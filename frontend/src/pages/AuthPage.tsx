import { Login } from "../components/Login";
import { SignUp } from "../components/SignIn";

export function AuthPage(){
    return (
        <div>
            <h1>Auth Page</h1>
            <Login />
            <SignUp />
        </div>
    )
}