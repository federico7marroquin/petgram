import { useLocation, useNavigate } from 'react-router-dom'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation';

export const RegisterContainer = () => {

    let location = useLocation();
    let navigate = useNavigate();

    const [registerMutation, loading, setLoading, error, setError] = useRegisterMutation();

    const registerAndRedirect = async (userCredentials) => {
        const input = userCredentials
        const variables = { input }
        setLoading(true)
        try {
            const response = await registerMutation({ variables })
            console.log('bearer', response)
            navigate('/login', { state: { from: location }, replace: true });
        }
        catch (e) {
            console.error('Exception', e)
            setError(true)
        }
        finally {
            setLoading(false)
        }


    }

    const errorMsg = error ? 'The user is already registered or there is a problem.': ''


    return <UserForm disabled={loading} error={errorMsg} onSubmit={registerAndRedirect} />

}