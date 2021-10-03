import React, { FC } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomeView from '../views/HomeView';
  
export interface IMainRoutes {
    children?: any,
    header: JSX.Element,
    footer: JSX.Element
}

const MainRoutes: FC<IMainRoutes> = (props: IMainRoutes): JSX.Element => {

    const {children, header, footer} = props;

    return (
        <Router>
            {header}

            {children}

            <Route path="/" component={HomeView}/>

            {footer}
        </Router>
    )
}

export default MainRoutes
