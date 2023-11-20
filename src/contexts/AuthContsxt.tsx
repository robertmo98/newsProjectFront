import { ReactNode, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload, UserInfo } from "../@Types";
import { useNavigate } from "react-router-dom";



interface AuthContextState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  token?: string;
  username?: string;
  profilePic?: any;
  login: (username: string, token: string) => void;
  logout: () => void;
  updateProfilePic: (url: string) => void
}

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  //todo: set a generic profile pic.
  profilePic: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  login: (username: string, token: string) => {},
  logout: () => {},
  updateProfilePic:((url: string) =>{}),
};

//create context
const AuthContext = createContext<AuthContextState>(initialState);

//wrapper component rafce:
//used only in index.tsx (מנגיש את הקונטקסט לכל האפליקציה)
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [profilePic, setProfilePic] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [token, setToken] = useState<string>();
  // const [isAdmin, setAdmin] = useState(false);


  useEffect(() => {
    //code that runs once, thus no infinite render loop
    //run code once the component is loaded to the dom:
    const data = localStorage.getItem("user");


    if (data) {
      const user = JSON.parse(data);
      setIsLoggedIn(true);
      setToken(user.token);
      setUsername(user.username);

      const decodedToken = jwtDecode<CustomJwtPayload>(user.token);
      setAdmin(decodedToken.role === "admin");
      
      const profilePicFromData = decodedToken.profilePic;

        if(profilePicFromData && profilePicFromData?.length>1) {
          setProfilePic(profilePicFromData);
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
    }
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContext;