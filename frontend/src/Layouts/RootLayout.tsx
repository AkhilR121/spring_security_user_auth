import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div>
      <header>He</header>
      <Outlet />
      <footer>Foo</footer>
    </div>
  )
}
