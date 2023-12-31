import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from 'react-router-dom'

import logo from '../Media/logo.svg'
import { Switch } from '@mui/material';

const pages = [];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar({toggle}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const navigate=useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    // const handleMenuClick=(event) => {
    //     const menuItem=event.target.dataset.name;

    //     if(menuItem==='Home'){
    //         navigate('/');
    //     }else if(menuItem==='Get Started'){
    //         navigate('/details/personal');
    //     }else if(menuItem==='Demo'){
    //         navigate('/resume/')
    //     }
    // }

    return (
        <AppBar position="static" style={{backgroundImage:"linear-gradient(to bottom right,#212529,#343a40,#495057)"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} width="35px" height="35px" alt='Logo' />
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 800,
                            // letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MyResume<span><b style={{color:'red'}}>.</b></span>in
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page}  >
                                    <Button sx={{color:'inherit'}} onClick={console.log("yey")}data-name={page} ><Typography textAlign="center">{page}</Typography></Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={console.log("yey")}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                data-name={page}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{display:"flex",justifyContent: 'center',alignItems: 'center'}}>
                        <Typography
                            variant="h6"
                            component="h5"
                            sx={{mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 800,
                                // letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Theme  
                        </Typography>
                        <Switch
                        onChange={toggle}
                        />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;