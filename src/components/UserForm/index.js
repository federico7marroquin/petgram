import PropTypes from 'prop-types'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, P, Main, Link } from './styles'


export const UserForm = ({ onSubmit, signIn }) => {

    const [email, setEmail] = useInputValue('')
    const [password, setPassword] = useInputValue('')

    return (
        <Main>
            <h2>{signIn ? 'Sign in' : 'Sign up'}</h2>
            <Form onSubmit={onSubmit}>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                />
                <Input
                    placeholder="Password"
                    type='password'
                    value={password}
                    onChange={setPassword}

                />
                <Button>{signIn ? 'Sign in' : 'Sign up'}</Button>
            </Form>
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
}