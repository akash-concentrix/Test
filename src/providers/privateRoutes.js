import { Outlet, Navigate } from 'react-router-dom';

import { useSessionData } from '../hooks/useSessiondata';

const PrivateRoutes = () => {
    const { isLoading, isError, error } = useSessionData()
    if (isError || error) {
        return <Navigate to="/login" />
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <Outlet />
}

export default PrivateRoutes;