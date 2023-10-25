import Layout from "components/Layout";
import React, {Component} from "react";
import HomePage from "containers/Home";

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