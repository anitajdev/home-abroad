import Nav from "./components/Nav"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="p-4 flex flex-col min-h-screen">
        <Nav />
        <Outlet />
    </div>
  )
}

export default Layout