import PropTypes from 'prop-types'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
    
    const [email, setEmail] = useInputValue('')
    const [password, setPassword] = useInputValue('')

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="Email"
                value={email}
                onChange={setEmail}
            />
            <input
                placeholder="Password"
                type='password' 
                value={password}
                onChange={setPassword}

            />
            <button>Iniciar sesión</button>
        </form>
    )
}

UserForm.propTypes = {
    onSubmit: PropTypes.func
}