import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ isAuthenticated, children }: any) => {

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }
    return children
};

export default ProtectedRoute;
