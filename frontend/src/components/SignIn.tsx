export function SignUp() {
  return (
    <section>
      <header>SignIn</header>
      <main>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" />
        </div>
      </main>
      <footer>
        <button>SignIn</button>
      </footer>
    </section>
  );
}
