import PropTypes from 'prop-types'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, P, Main, Link, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, signIn, error, disabled }) => {

    const [email, setEmail] = useInputValue('')
    const [password, setPassword] = useInputValue('')

    const register = (e) => {
        e.preventDefault();
        onSubmit({ email, password })
    }

    return (
        <Main>
            <h2>{signIn ? 'Sign in' : 'Sign up'}</h2>
            <Form disabled={disabled} onSubmit={register}>
                <Input
                    disabled={disabled}
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                />
                <Input
                    disabled={disabled}
                    placeholder="Password"
                    type='password'
                    value={password}
                    onChange={setPassword}

                />
                <SubmitButton disabled={disabled} >{signIn ? 'Sign in' : 'Sign up'}</SubmitButton>
            </Form>
            {error && <Error> {error}</Error>}
            <P>
                {signIn ? 'You are not registered? ' : 'You are already registered? '}
                <Link to={signIn ? '/register' : '/login'}>
                    {signIn ? 'Sign up' : 'Sign in'}
                </Link>
            </P>

        </Main>
    )
}

UserForm.propTypes = {
    onSubmit: PropTypes.func,
    signIn: PropTypes.bool,
    error: PropTypes.string || PropTypes.bool,
    disabled: PropTypes.bool
}