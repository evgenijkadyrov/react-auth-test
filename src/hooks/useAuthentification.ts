import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ROUTES} from "../constants/routers.ts";
import {useAuth} from "../hooks/useAuth.ts";

export const useAuthentification = () => {
    const { user, logout, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate(ROUTES.LOGIN, { replace: true });
        } else {
            navigate(ROUTES.WELCOME, { replace: true });
        }
    }, [user, navigate]);

    return {user, logout, login};
}