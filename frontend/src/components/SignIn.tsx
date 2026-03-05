export function SignUp() {
  return (
    <section>
      <main className="*:flex *:flex-col *:gap-2">
        <div>
          <label htmlFor="email">Email</label>
          <input className="p-2 border rounded-2xl outline-none" type="email" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input className="p-2 border rounded-2xl outline-none" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="p-2 border rounded-2xl outline-none" type="password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input className="p-2 border rounded-2xl outline-none" type="password" />
        </div>
      </main>
      <footer>
        <button className="flex items-center justify-center w-full py-3 cursor-pointer">SignIn</button>
      </footer>
    </section>
  );
}
