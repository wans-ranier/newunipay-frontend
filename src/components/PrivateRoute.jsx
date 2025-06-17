import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../services/userService";
import { SpinnerLoading } from "./SpinnerLoading";

async function checkAuth() {
    try {
        const user = await getUser();

        if (user) {
            return true;
        }

        return false;
    } catch (err) {
        console.error(err);
        return false;
    }
}

export function PrivateRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        (async () => {
            const authenticated = await checkAuth();
            setIsAuth(authenticated);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <SpinnerLoading/>;
    }

    return isAuth ? children : <Navigate to="/login" />;
}