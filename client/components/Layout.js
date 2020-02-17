import Header from './front/Header'
import Nav from '../components/front/Nav'

const withLayout = Page => {
    return () => (
        <>
            <Header />
            <Nav />
            <Page />
            <style global jsx>{`
                html{
                    font-size:10px;
                    font-family: Roboto, Helvetica, "Open Suns";
                }
                body{
                    padding:0;
                    margin:0;
                }
                a{
                    text-decoration: none;
                }
            `}</style>
        </>
    );
};


export default withLayout;