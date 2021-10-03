import React from 'react'
import PropTypes from 'prop-types'
import { AppBar } from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const DarkAppBar = styled(AppBar)({

    backgroundColor: "black"

})


function Header(props: any){

    const {isDrawerOpen, setIsDrawerOpen} = props;

    const toggleDrawer = () => {
        setIsDrawerOpen((prev: boolean) => !prev)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
      <DarkAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
            className="text-white"
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spring-media
          </Typography>
          <Button variant="outlined" color="primary">Login</Button>
          <button className="btn btn-none">world</button>
        </Toolbar>
      </DarkAppBar>
    </Box>
    )
}

export default Header