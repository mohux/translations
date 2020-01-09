import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;