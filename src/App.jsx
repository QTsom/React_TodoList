import Layout from "components/Layout";
import React, {Component} from "react";
import HomePage from "containers/Home";
import resetStyle from "assets/css/reset.css"
import style from "assets/css/style.css"

class App extends Component {
    render() {
        return (
            <Layout>
                <HomePage />
            </Layout>
        );
    }
}

export default App;