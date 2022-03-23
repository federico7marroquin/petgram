import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.localStorage.getItem('token')
    })



    const value = {
        isAuth,
        activateAuth: token => {
            setIsAuth(true)
            window.localStorage.setItem('token', token)
        },
        removeAuth: () => {
            setIsAuth(false)
            window.localStorage.removeItem('token')
        }
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.element
}


function useAuth() {
    const context = useContext(Context)
    if (context === undefined) {
        throw new Error('useContext must be used within a Provider')
    }
    return context
}


export default { Provider, useAuth }