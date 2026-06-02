import { Outlet } from 'react-router'
import { Nav } from './components/common/Nav'
import { Footer } from './components/common/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
