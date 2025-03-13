import { useEffect, useState } from "react";
import Context from "./Context";

function Provider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.remove('light', 'dark')
        theme === 'light' ?
            document.documentElement.classList.toggle('light') :
            document.documentElement.classList.toggle('dark')
    }, [theme])

    const value = {
        theme,
        setTheme
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export default Provider;