export function Login() {
  return (
    <section>
      <header>Login</header>
      <main>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
      </main>
      <footer>
        <button>Login</button>
      </footer>
    </section>
  );
}
