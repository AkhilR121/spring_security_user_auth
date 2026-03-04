import { useState } from "react";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignIn";

export function AuthPage() {
  const [authPage, setAuthPage] = useState<string>("login");

  return (
    <div>
      <header>
        <button onClick={() => setAuthPage('login')}>LoginIn</button>
        <button onClick={() => setAuthPage('signup')}>SignUp</button>
      </header>
      <div>
        {authPage === 'login' ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}
