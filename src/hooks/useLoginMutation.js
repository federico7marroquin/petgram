import { useMutation, gql } from '@apollo/client';
import { useState } from 'react'

const LOGIN = gql`
mutation login($input: UserCredentials!) {
    login (input: $input)
}
`

export const useLoginMutation = () => {
    const [loginMutation] = useMutation(LOGIN);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    return [loginMutation, loading, setLoading, error, setError]
}