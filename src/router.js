import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons/index'
import Modals from './pages/ui/modals'
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
