import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home.js'
import SkillsPage from './SkillsPage.js';
import EducationPage from './EducationPage';


const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/skills' component={SkillsPage} />
				<Route path='/education' component={EducationPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
