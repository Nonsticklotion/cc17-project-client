import { createContext } from "react";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/localStorage";
import { useEffect } from "react";
import authApi from "../api/auth";
import { useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getAuthUser();
          setAuthUser(res.data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsAuthLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    const res = await authApi.login(credentials);
    console.log(res);
    setAccessToken(res.data.accessToken);
    const resGetAuthUser = await authApi.getAuthUser();
    setAuthUser(resGetAuthUser.data.user);
  };
  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, authUser, isAuthUserLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
