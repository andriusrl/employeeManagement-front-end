import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignupRolePage from "../SignupRolePage/index.js"
import ListEmployeePage from "../ListEmployeePage"
import ListRolePage from "../ListRolePage"
import SignupEmployeePage from "../../containers/SignupEmployeePage"
import HomePage from "../HomePage"



export const routes = {
    root: "/",
    signupRole: "/cadastro/cargo",
    signupEmployee: "/cadastro/funcinario",
    listEmployee: "/listar/funcionario",
    listRole: "/listar/cargo",
    error: "/error"
};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={HomePage} />
                <Route exact path={routes.signupRole} component={SignupRolePage} />
                <Route exact path={routes.signupEmployee} component={SignupEmployeePage} />
                <Route exact path={routes.listEmployee} component={ListEmployeePage} />
                <Route exact path={routes.listRole} component={ListRolePage} />
            </Switch>
        </ConnectedRouter>
    )
}
export default Router;