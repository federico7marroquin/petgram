import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react/cjs/react.development'

const Context = createContext()

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)

    const value = {
        isAuth,
        activateAuth: () => setIsAuth(true)
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
        throw new Error('useCount must be used within a Provider')
      }
      return context
}


export default { Provider, useAuth}