import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';
import { history } from './redux';
import { connect } from 'react-redux';
import AdminLayout from './layouts/DefaultLayout/AdminLayout';

function App(props) {
    let route;
    if (props.user.isLoggedIn === true) {
        route = privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = AdminLayout;

            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }

            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                />
            );
        });
    }
    return (
        <Router history={history}>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {route}
                </Routes>
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(App);
