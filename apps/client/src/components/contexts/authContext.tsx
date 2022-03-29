import { createContext, useContext, useState } from "react";

const useAuthContext = () => {
  const [token, setToken] = useState(null);
  return { token, setToken };
};
const authContext = createContext({});

export const AuthContext = () => {
  return <authContext.Provider value={useAuthContext()}></authContext.Provider>;
};
export const useAuth = () => {
  return useContext(authContext);
};
