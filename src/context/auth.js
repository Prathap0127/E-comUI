import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// user authentications using the user data  from login to logout from the local storage

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios

  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {/* passing the data to the entier child from the parents */}
      {children}
    </AuthContext.Provider>
  );
};

//create custom hook for context

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
