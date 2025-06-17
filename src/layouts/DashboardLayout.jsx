import { Outlet } from "react-router-dom"
import { DashboardHeader } from "@/components/DashboardHeader"
import '@/assets/css/dashboardLayoutStyles.css'

export const DashboardLayout = () => {
    return (
        <div className="dashboard">
            <DashboardHeader />
            <Outlet />
        </div>
    )
}