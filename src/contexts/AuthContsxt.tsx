import { ReactNode, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload } from "../@Types";
import { useNavigate } from "react-router-dom";

interface AuthContextState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  token?: string;
  username?: string;
  exp?: number;
  profilePic?: any;
  login: (username: string, token: string) => void;
  logout: () => void;
  updateProfilePic: (url: string) => void;
}

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  exp: undefined,
  profilePic: undefined,
  login: (username: string, token: string) => {},
  logout: () => {},
  updateProfilePic: (url: string) => {},
};

const AuthContext = createContext<AuthContextState>(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [profilePic, setProfilePic] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [token, setToken] = useState<string>();
  const [exp, setExp] = useState<number | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      const user = JSON.parse(data);
      setIsLoggedIn(true);
      setToken(user.token);
      setUsername(user.username);

      const decodedToken = jwtDecode<CustomJwtPayload>(user.token);
      setAdmin(decodedToken.role === "admin");
      setExp(decodedToken.exp);
      setProfilePic(decodedToken.profilePic);

      if (exp !== undefined) {
        const expirationTime = exp * 1000; /* Convert to milliseconds */
        const currentTime = new Date().getTime();
        const timeRemaining = expirationTime - currentTime;
        const logoutTimer = setTimeout(() => {
          /*Logout action: */
          localStorage.removeItem("user");
          setExp(undefined);
          navigate("/login");
          window.location.reload();
        }, timeRemaining);
        return () => clearTimeout(logoutTimer);
      }

      
    }
  }, [isLoggedIn]);

  const auth = {
    isLoggedIn: isLoggedIn,
    isAdmin: isAdmin,
    profilePic: profilePic,
    token,
    username,
    login: (username: string, token: string) => {
      setUsername(username);
      setToken(token);
      setProfilePic(profilePic);
      setIsLoggedIn(true);
    },
    logout: () => {
      localStorage.removeItem("user");
      setProfilePic("");
      setUsername(undefined);
      setAdmin(false);
      setToken(undefined);
      setIsLoggedIn(false);
    },
    updateProfilePic: (url: string) => {
      setProfilePic(url);
    },
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContext;
