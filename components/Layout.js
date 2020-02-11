import Header from './Header';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-unfetch'

if (typeof window === 'undefined') {
    global.fetch = fetch
}

const client = new ApolloClient({
    link: createHttpLink({
        fetch: fetch
    }),
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
});

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const withLayout = Page => {
    return () => (
        <ApolloProvider client={client}>
            <div style={layoutStyle}>
                <Header />
                <Page />
            </div>
        </ApolloProvider>
    );
};

export default withLayout;