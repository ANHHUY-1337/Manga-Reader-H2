import { useEffect, useState } from "react";
import Context from "./Context";

function Provider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })
    
    const [quantityComicArchive, setQuantityComicArchive] = useState(0)
    const [quantityComicHistory, setQuantityComicHistory] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    // Add user state for authentication
    const [user, setUser] = useState(() => {
        // Default user for demo purposes
        return { email: "user@example.com", name: "Demo User" }
    })

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.remove('light', 'dark')
        theme === 'light' ?
            document.documentElement.classList.toggle('light') :
            document.documentElement.classList.toggle('dark')
    }, [theme])

    // Initialize comic counts from localStorage
    useEffect(() => {
        if (user?.email) {
            const comicStorage = JSON.parse(localStorage.getItem('comic-storage')) || {}
            const historyStorage = JSON.parse(localStorage.getItem('history-storage')) || {}
            
            const userComics = comicStorage[user.email] || []
            const userHistory = historyStorage[user.email] || {}
            
            setQuantityComicArchive(userComics.length)
            setQuantityComicHistory(Object.keys(userHistory).length)
        }
    }, [user])

    const value = {
        theme,
        setTheme,
        quantityComicArchive,
        setQuantityComicArchive,
        quantityComicHistory,
        setQuantityComicHistory,
        width,
        user,
        setUser
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export default Provider;