import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function ErrorPage(){

    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>navigate(-1),5000);
    },[]);

    return(<h1>Opps something went wrong!!!!!!!!!!!!</h1>)
}