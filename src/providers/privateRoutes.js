import { Outlet, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import { useQuery } from "react-query";
// import { useAuth } from './auth';

const PrivateRoutes = () => {
    // const { data, isLoading, error } = useQuery({
    //     queryKey: ["FETCH_AUTH"],
    //     queryFn: async () => {
    //         const { data } = await axios.post(
    //             "https://naveenslog.pythonanywhere.com/auth/users/", {
    //                 email: "naveen.singh@outlook.in",
    //                 password: "Test@2022"
    //             }
    //         );
    //         return data;
    //     },
    // });
    // console.log(data);
    // console.log(isLoading);
    // console.log(error);

    // const auth = useAuth();

    // if(!auth.user){
    //     return <Navigate to="/" />
    // }

    let auth = { 'token': true }
    return (
        auth.user ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes;