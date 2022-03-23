import { ApolloClient, InMemoryCache, ApolloLink, from, HttpLink } from '@apollo/client';
import {onError } from '@apollo/client/link/error'


const authMiddleware = new ApolloLink((operation, forward) => {
    
    const token = window.localStorage.getItem('token')
    if (token) {
        operation.setContext({
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }
    return forward(operation)
})

const errorMiddleware = onError((error) => {
    console.log(error)
    if(error.graphQLErrors && error.graphQLErrors.length > 0 ) {
        switch(error.graphQLErrors[0].message ) {
            case 'user does not exist':
            case 'you must be logged in to perform this action' :
                window.localStorage.removeItem('token')
                window.location.href = '/login'
        }
        
    }
    if (error.networkError && error.networkError.result.code === 'invalid_token') {
        window.localStorage.removeItem('token')
        window.location.href = '/login'
    }
})

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        errorMiddleware,
        authMiddleware,
        new HttpLink({
            uri: 'https://petgram-fede-server.vercel.app/graphql',
        })
    ])

})