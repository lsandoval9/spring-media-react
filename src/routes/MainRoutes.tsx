import React, { FC, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Drawer from '../components/layout/Drawer';
import HomeView from '../views/HomeView';
  
export interface IMainRoutes {
    children?: any,
    Header: FC<any>,
    Footer: FC<any>
}

const MainRoutes: FC<IMainRoutes> = (props: IMainRoutes): JSX.Element => {

    const {Header, Footer} = props;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <Router>
            <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>

            <Route path="/" component={HomeView}/>

            <Footer />
        </Router>
    )
}

export default MainRoutes
