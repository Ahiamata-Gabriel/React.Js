import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/fakeAuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
