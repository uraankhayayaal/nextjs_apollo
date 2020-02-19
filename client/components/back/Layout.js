import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './Theme';

const withLayout = Page => {
    return () => (
        <>
            <Head>
                <title>Administration of IT Yakutia</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <ThemeProvider theme={Theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {/* <Component {...pageProps} /> */}
                <Page />
            </ThemeProvider>
            {/* <style global jsx>{`
            `}</style> */}
        </>
    );
};


export default withLayout;