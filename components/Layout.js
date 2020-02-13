import Header from './front/Header'
import Nav from '../components/front/Nav'

const withLayout = Page => {
    return () => (
        <>
            <Header />
            <Nav />
            <Page />
            <style global jsx>{`
                body{
                    padding:0;
                    margin:0;
                }
            `}</style>
        </>
    );
};


export default withLayout;