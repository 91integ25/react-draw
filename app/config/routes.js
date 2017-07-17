import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
 import Main from "../pages/Main";
 import WelcomePage from "../pages/WelcomePage";
 import SecondPage from "../pages/SecondPage";


 module.exports = (
 	<Router history={browserHistory}>
 		<Route path="/" component = {Main}>
 			<Route path="welcomepage" component={WelcomePage}>
 			</Route>
 			<Route path="secondpage" component={SecondPage}>
 			</Route>
 			<IndexRoute component={WelcomePage}
 		</Route>
 	</Router>
 );