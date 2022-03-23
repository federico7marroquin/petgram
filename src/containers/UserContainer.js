import Context from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const UserContainer = () => {
    const { removeAuth } = Context.useAuth()

    return (
        <>
            <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
        </>
    )
}