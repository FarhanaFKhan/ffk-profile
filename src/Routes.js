import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home.js'
import SkillsPage from './SkillsPage.js';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';
import ProjectPage from './ProjectPage';
import AdditionalPage from './AdditionalPage'


const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/skills' component={SkillsPage} />
				<Route path='/projects' component={ProjectPage} />
				<Route path='/education' component={EducationPage} />
				<Route path='/experience' component={ExperiencePage} />
				<Route path='/additional' component={AdditionalPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
