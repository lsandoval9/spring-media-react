import { useDisclosure } from '@chakra-ui/hooks';
import React, { FC, useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
import Drawer from '../components/layout/Drawer';
import FilterView from '../views/FilterView';
import HomeView from '../views/HomeView';
  
export interface IMainRoutes {
    Header: FC<any>,
    Footer: FC<any>
}

const MainRoutes: FC<IMainRoutes> = (props: IMainRoutes): JSX.Element => {

    const {Header, Footer} = props;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const {isOpen, onClose, onOpen} = useDisclosure()

    

    return (
        <Router>
            <Header  onOpen={onOpen}/>
            <Drawer onClose={onClose} isOpen={isOpen}/>
            <Switch>
                <Route path="/" component={HomeView} exact />
                <Route path="/filter" component={FilterView} />
            </Switch>
            
            <Footer />  
        </Router>
    )
}

export default MainRoutes
