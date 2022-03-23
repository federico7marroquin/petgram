import { useMutation, gql } from '@apollo/client';
import { useState } from 'react'
const REGISTER = gql`
mutation signup($input: UserCredentials!) {
    signup (input: $input)
}
`

export const useRegisterMutation = () => {
    const [registerMutation] = useMutation(REGISTER);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    return [registerMutation, loading, setLoading, error, setError]
}