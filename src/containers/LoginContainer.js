import Context from '../Context'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserForm } from '../components/UserForm'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { useEffect } from 'react'

export const LoginContainer = () => {

    let location = useLocation();
    let navigate = useNavigate();
    const { isAuth, activateAuth } = Context.useAuth()

    useEffect(() => {
        if (isAuth) {
            navigate('/', { state: { from: location }, replace: true });

        }
    }, [isAuth])

    const [loginMutation, loading, setLoading, error, setError] = useLoginMutation();


    const signInAndRedirect = async (userCredentials) => {
        const input = userCredentials
        const variables = { input }
        setLoading(true)
        try {
            const response = await loginMutation({ variables })
            activateAuth(response.data.login)
            let pathName = '/'
            if (location.state && location.state.from && location.state.from.pathname && location.state.from.pathname !== '/register') {
                pathName = location.state.from.pathname
            }
            navigate(pathName, { state: { from: location }, replace: true });
        }
        catch (e) {
            console.error('Exception', e)
            setError(true)
        }
        finally {
            setLoading(false)
        }

    }

    const errorMsg = error ? 'The password is not correct or the User not exists ' : ''

    return <UserForm disabled={loading} error={errorMsg} signIn onSubmit={signInAndRedirect} />

}