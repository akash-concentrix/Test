import { Outlet, Navigate } from 'react-router-dom';

import { useSessionData } from '../hooks/useSessiondata';

const PrivateRoutes = () => {
    const { data, isLoading, isError, error } = useSessionData()
    if (isError || error) {
        return <Navigate to="/" />
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    console.log(data, "data----")

    return <Outlet />
}

export default PrivateRoutes;