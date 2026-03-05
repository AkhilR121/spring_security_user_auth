export function Login(props: { setIsAuthPage: (page: string) => void }) {
  return (
    <section className="p-6">
      <main className="*:flex *:flex-col *:gap-2">
        <div>
          <label htmlFor="username">Username</label>
          <input className="p-2 border rounded-2xl outline-none" type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="p-2 border rounded-2xl outline-none" type="password" id="password" />
        </div>
      </main>
      <button onClick={() => props.setIsAuthPage('signup')} className="text-blue-700 underline self-start w-full">New User?</button>
      <footer>
        <button className="flex items-center justify-center w-full">Login</button>
      </footer>
    </section>
  );
}
