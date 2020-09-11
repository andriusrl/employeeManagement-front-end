import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignupRolePage from "../SignupRolePage/index.js"
import ListEmployeePage from "../ListEmployeePage"
import ListRolePage from "../ListRolePage"
import LoadingPage from "../../containers/LoadingPage"
import ErrorPage from "../../containers/ErrorPage"
import SignupEmployeePage from "../../containers/SignupEmployeePage"



export const routes = {
    root: "/",
    signupEmployee: "/cadastro/funcinario",
    ListEmployee: "/listar/funcionario",
    ListRole: "/listar/cargo",
    loading: "/loading",
    error: "/error"
  };

  function Router(props) {
      return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={SignupRolePage} />
                <Route exact path={routes.signupEmployee} component={SignupEmployeePage} />
                <Route exact path={routes.ListEmployee} component={ListEmployeePage} />
                <Route exact path={routes.ListRole} component={ListRolePage} />
                <Route exact path={routes.loading} component={LoadingPage} />
                <Route exact path={routes.error} component={ErrorPage} />

            </Switch>
        </ConnectedRouter>
      )
  }
  export default Router;