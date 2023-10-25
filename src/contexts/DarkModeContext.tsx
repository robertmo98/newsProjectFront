import { ReactNode, createContext, useState } from "react";


const initialState = {
    darkMode: false,
    toggleDarkMode: () => {},
};


const DarkModeContext = createContext(initialState);


export const DarkModeContextWrapper = ({children}: {children: ReactNode}) => {
    const [ darkMode, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark((d) => !d);
    };

    
    return (
        <DarkModeContext.Provider
            value={{darkMode: darkMode, toggleDarkMode: toggleDarkMode}}
        >
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext