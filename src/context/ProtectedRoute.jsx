import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function ProtectedRoute({children}) {

    const {isAuth} = useAuth();
    const navi = useNavigate();
    useEffect(()=>{
        !isAuth&&navi('/')
    },[isAuth,navi])


    return <>
    {isAuth?children:null}
    </>
}
export default ProtectedRoute;