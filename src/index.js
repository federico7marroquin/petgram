import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Context from './Context'
import { App } from './App'
const client = new ApolloClient({
    uri: 'https://petgram-fede-server.vercel.app/graphql',
    cache: new InMemoryCache(),
})
ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>
    , document.getElementById('app'))
