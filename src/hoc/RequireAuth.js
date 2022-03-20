import Context from '../Context'
import {  useLocation, Navigate  } from 'react-router-dom'
import PropTypes from 'prop-types'

export function RequireAuth({ children }){
    let location = useLocation();

    const { isAuth } = Context.useAuth()    

    if(!isAuth){
        return <Navigate to="/login" state={{ from: location}} replace /> 
    }else {
        return children
    }
}

RequireAuth.propTypes = {
    children: PropTypes.element
}