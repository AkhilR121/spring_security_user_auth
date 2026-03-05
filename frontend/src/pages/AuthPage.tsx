import { useState } from "react";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignIn";

export function AuthPage() {
  const [authPage, setAuthPage] = useState<string>("login");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <header className="flex gap-2 p-4 items-center justify-center *:cursor-pointer">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full" onClick={() => setAuthPage('login')}>LoginIn</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full" onClick={() => setAuthPage('signup')}>SignUp</button>
      </header>
      <div>
        {authPage === 'login' ? <Login setAuthPage={setAuthPage} /> : <SignUp />}
      </div>
    </div>
  );
}
