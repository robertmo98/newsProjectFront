import { ReactNode, createContext, useEffect, useState } from "react";

interface AuthContextState {
  isLoggedIn: boolean;
  token?: string;
  username?: string;
  login: (username: string, token: string) => void;
  logout: () => void;
}

const initialState = {
  isLoggedIn: false,
  login: (username: string, token: string) => {},
  logout: () => {},
};

//create context
const AuthContext = createContext<AuthContextState>(initialState);

//wrapper component rafce:
//used only in index.tsx (מנגיש את הקונטקסט לכל האפליקציה)
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string>();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    //code that runs once, thus no infinite render loop
    //run code once the component is loaded to the dom:
    const data = localStorage.getItem("user");
    if (data) {
      const user = JSON.parse(data);
      setIsLoggedIn(true);
      setToken(user.token);
      setUsername(user.username);
    }
  }, []);
  const auth = {
    isLoggedIn: isLoggedIn,
    token,
    username,
    login: (username: string, token: string) => {
      setUsername(username);
      setToken(token);
      setIsLoggedIn(true);
    },
    logout: () => {
      localStorage.removeItem("user");
      setUsername(undefined);
      setToken(undefined);
      setIsLoggedIn(false);
    },
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContext;