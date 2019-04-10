import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons/index'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notice from './pages/ui/notice'
import NoMacth from './pages/noMatch'

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route
                            path="/admin"
                            render={() => {
                                return (
                                    <Admin>
                                        <Switch>
                                            <Route path="/admin/ui/buttons" component={Buttons}/>
                                            <Route path="/admin/ui/modals" component={Modals}/>
                                            <Route path="/admin/ui/loadings" component={Loading}/>
                                            <Route path="/admin/ui/notification" component={Notice}/>
                                            <Route component={NoMacth}/>
                                        </Switch>
                                    </Admin>
                                )
                            }}
                        />
                        <Route path="/order/detail" component={Login}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
