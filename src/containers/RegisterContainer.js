import { useLocation, useNavigate } from 'react-router-dom'
import { UserForm } from '../components/UserForm'

export const RegisterContainer = () => {
    let location = useLocation();
    let navigate = useNavigate();


    const registerAndRedirect = (e) => {
        e.preventDefault()
        navigate('/login', { state: { from: location }, replace: true });


    }
    return <UserForm onSubmit={registerAndRedirect} />

}