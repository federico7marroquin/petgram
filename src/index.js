import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloApi/apolloApi'
import Context from './Context'
import { App } from './App'



ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>
    , document.getElementById('app'))
