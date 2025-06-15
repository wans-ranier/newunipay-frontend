import { Outlet } from "react-router-dom"
import { Header } from "../components/NavBar"

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}