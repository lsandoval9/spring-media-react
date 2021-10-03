import { SwipeableDrawer } from '@mui/material'
import React from 'react'

function Drawer(props: any) {

    const {isDrawerOpen, setIsDrawerOpen} = props;

    const onDrawerOpen = () => {

        setIsDrawerOpen(true);

    }

    const onDrawerClose= () => {

        setIsDrawerOpen(false);

    }

    return (
        <SwipeableDrawer
      anchor="left"
      open={isDrawerOpen}
      onOpen={onDrawerOpen}
      onClose={onDrawerClose}
    >
        hello
    </SwipeableDrawer>
    )
}

export default Drawer
