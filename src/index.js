import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { App } from './App'

const client = new ApolloClient({
    uri: 'https://petgram-fede-server.vercel.app/graphql',
    cache: new InMemoryCache(),
})
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('app'))
