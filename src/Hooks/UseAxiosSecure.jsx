import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/Authproviders";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-roan-psi.vercel.app',
    withCredentials: true,
   
})

const UseAxiosSecure = () => {
   const {logOut} = useContext(AuthContext);
   const navigate = useNavigate();
       useEffect(()=> {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },error => {
            // console.log('error tracked in the interceptor', error.response);
           if(error.response.status === 401 || error.response.status === 403){
            // console.log('logged out the user');
            logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.log(error))
           }
        })
    },[])
    return axiosSecure;
};

export default UseAxiosSecure;