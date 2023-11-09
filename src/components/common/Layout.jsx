import Footer from "./Footer";
import Header from "./Header";
import Dial from "./Dial"
// import Aside from "./Aside"

const Layout = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Dial />
            <Footer />
        </>
    )
}

export default Layout;