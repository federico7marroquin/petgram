import Context from '../Context'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const { activateAuth } = Context.useAuth()

    const logInAndRedirect = (e) => {
        e.preventDefault()
        activateAuth()
        let pathName = '/'
        if (location.state && location.state.from && location.state.from.pathname) {
            pathName = location.state.from.pathname
        }

        navigate(pathName, { state: { from: location }, replace: true });


    }
    return <UserForm onSubmit={logInAndRedirect} />

}